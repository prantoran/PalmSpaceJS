#!/usr/bin/node

import express from 'express';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import createDBPool from './db';
import logger from './middleware/logger';
import authenticator from './middleware/authenticator';

dotenv.config();

const app = express();
const HOST = process.env.HOST || `localhost`;
const PORT = parseInt(process.env.PORT || "3000");
const NODE_ENV = process.env.NODE_ENV || "development";

const dbConfig = {
    host: process.env.DB_host || "localhost",
    port: process.env.DB_port || 3306,
    user: process.env.DB_user || "prantoran",
    pass: process.env.DB_pass || "",
    database: process.env.DB_database || "prantordb",
}

console.group("environment");
//console.table(process.env);
console.table({ HOST, PORT, NODE_ENV });
console.groupEnd();

console.group("db");
//console.table(process.env);
console.table(dbConfig);
console.groupEnd();

const pool = createDBPool(
    dbConfig.host,
    dbConfig.user,
    dbConfig.pass,
    dbConfig.database);

// console.group("db-pool");
// //console.table(process.env);
// console.table(pool);
// console.groupEnd();


app.use(express.static('public'));
app.use(express.json());
app.use(logger);
app.use(authenticator);


app.get('/', (req, res) => {
    res.send(`${PORT} working`);
});

// Route to test database connection
app.get('/:tableName', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM ${req.params.tableName}`
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
});


app.get('/csv/:tableName', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM ${req.params.tableName}`
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
});


app.post('/admin/create/table/:name', async (req, res) => {

    let conn
    try {
        conn = await pool.getConnection()

        let sql = `
        CREATE TABLE ${req.params.name} (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            user_id VARCHAR(255), 
            technique VARCHAR(255),
            selection VARCHAR(255),
            cells_row INT,
            cells_col INT,
            button_sz VARCHAR(255),
            btn_width INT,
            btn_height INT,
            target_btn_id VARCHAR(255),
            target_rowcol VARCHAR(255),
            target_id INT,
            targets_visit_time_ms FLOAT,
            elapsed_time_ms FLOAT,
            cursor_dist_px FLOAT,
            attempts INT,
            visited_cells INT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;

        console.log(sql);

        let result = await conn.query(sql);

        res.send(result)
    } catch (error) {
        // throw error
        console.error(error);
        if (error.code == "ER_TABLE_EXISTS_ERROR") {
            res.send({ msg: "table exists" });
        } else {
            res.send("internal server error");
        }
    } finally {
        if (conn) {
            conn.release()
        }
    }
})

app.post('/save/study1/record', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log(req.body);

        let body = req.body;
        if (Array.isArray(body)) {
            if (body.length > 0) body = body[0];
            else {
                res.send("request body empty");
                return;
            }
        }

        let sql = `
            INSERT INTO 
            study1 (
                user_id, 
                technique,
                selection,
                cells_row, 
                cells_col, 
                button_sz, 
                btn_width, 
                btn_height, 
                target_btn_id, 
                target_rowcol, 
                target_id, 
                targets_visit_time_ms, 
                elapsed_time_ms, 
                cursor_dist_px, 
                attempts, 
                visited_cells
            ) 
            VALUES (
                ${body.user_id}, 
                "${body.technique}", 
                "${body.trigger}",
                ${body.cells_row}, 
                ${body.cells_col}, 
                "${body.button_sz}", 
                ${body.btn_width}, 
                ${body.btn_height}, 
                ${body.target_btn_id}, 
                "${body.target_rowcol}", 
                ${body.target_id}, 
                ${body.targets_visit_time_ms}, 
                ${body.elapsed_time_ms}, 
                ${body.cursor_dist_px}, 
                ${body.attempts}, 
                ${body.visited_cells}
            );`;
        
        let result = await conn.query(sql);
        console.log(result);

        res.send(result);
        
    } catch (error) {
        console.error(error);
        res.send({"error": error});
    } finally {
        if (conn) conn.release();
    }
});


app.get('/stats/study1', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        let sql = `
            SELECT 
                SUM(elapsed_time_ms)/1000 as 'total_time_sec', 
                COUNT(elapsed_time_ms) as 'total_events', 
                (SUM(elapsed_time_ms)/COUNT(elapsed_time_ms))/1000 as 'avg_elapsed_time_sec', 
                SUM(attempts) as 'total_attempts', 
                SUM(attempts)/COUNT(attempts) as 'avg_attempts', 
                SUM(visited_cells) as 'visited_cells', 
                SUM(visited_cells)/COUNT(visited_cells) as 'avg_visited_cells', 
                technique, 
                cells_row, 
                cells_col
            From study1
            GROUP BY technique, cells_row, cells_col;`;
        let result = await conn.query(sql);
        console.log(result);
        res.send(result);
    } catch(error) {
        console.error(error);
        res.send({"error": error});
    } finally {
        if (conn) conn.release();
    }
});

app.post('/admin/delete/table/:name', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();

        let sql = `DROP TABLE IF EXISTS ${req.params.name}`;
        let result = await conn.query(sql);

        console.log(result);

        res.send(result);
    } catch (error) {
        // throw error
        console.error(error);
        res.send(error);
    } finally {
        if (conn) {
            conn.release()
        }
    }
});

app.post('/admin/sql', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();

        let sql = req.body.query;
        let result = await conn.query(sql);

        console.log(result);

        res.send(result);
    } catch (error) {
        // throw error
        console.error(error);
        res.send(error);
    } finally {
        if (conn) {
            conn.release()
        }
    }
});


// todo add middleware to print request host
// todo middleware for error handling

if (NODE_ENV == "production") {
    const SSL_KEY = process.env.SSL_KEY || "";
    const SSL_CERT = process.env.SSL_CERT || "";

    console.group("ssl");
    //console.table(process.env);
    console.table({ SSL_CERT, SSL_KEY });
    console.groupEnd();

    https.createServer({
        key: fs.readFileSync(SSL_KEY),
        cert: fs.readFileSync(SSL_CERT)
    }, app)
        .listen(PORT, function () {
            return console.log(`server is listening on ${PORT}`);
        });
} else {
    app.listen(PORT, HOST, () => {
        return console.log(`server is listening on ${PORT}`);
    });
}
