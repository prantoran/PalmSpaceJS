import {TechniqueType} from "./constant.js";

class FishEye {
    constructor(parent, state) {
        this.name = "FishEye";
        this.parent = parent;
        this.parent.type = TechniqueType.FishEye;
    }

    calculate(state) {

        if (!state.initiator.left.show) return;

        let palm = state.palmRect();
        
        const w = Math.max(64, Math.min(400, palm.maxDim));
        
        this.parent.grid.input.width    = w;
        this.parent.grid.input.height   = w;
        this.parent.grid.output.width   = w;
        this.parent.grid.output.height  = w;
        
        this.parent.grid.input.x    = palm.x;
        this.parent.grid.input.y    = palm.y;
        this.parent.grid.output.x   = palm.x;
        this.parent.grid.output.y   = palm.y;
        
        if (this.parent.grid.input.x > 0 && 
            this.parent.grid.input.y > 0) {
            
                this.parent.grid.input.align(state);
                this.parent.grid.output.align(state);

                this.parent._setupSelection(state);

                this.parent.grid.input.setMajorWeight(state);
                this.parent.grid.output.setMajorWeight(state);
        }
    }

    draw(state) {
        if (!state.initiator.left.show) return;

        this.parent._draw_main_grid_layout(state);   
        this.parent._drawCells(state);
        this.parent._drawTextHighlighted(state);
        this.parent._drawTextMarked(state);
        this.parent._drawProgressBar(state);
    }
}


export {FishEye};