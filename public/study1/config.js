class Config {
    constructor() {
        this.TRANSPARENCY_ALPHA = 0.5;
        this.DWELLWAIT_MS = 1000;
        this.CAMWIDTH = 1280;
        this.CAMHEIGHT = 720;
        this.IMGPALM_DIMMAX = Math.min(this.CAMHEIGHT, this.CAMWIDTH) / 3;
        this.ABSOLUTEWIDTH = 350;
        this.progressbar = {
            MAXWIDTH: this.CAMWIDTH / 8,
            MAXHEIGHT: this.CAMHEIGHT / 28
        }; // todo use this

        this.fisheye = {
            weights: {
                MAX: 8,
                NEIGHBOR: 4,
                NORMAL: 3,
                NORMAL2: 6,
                NORMAL3: 9,
                SUMMAXNEIGHBOR: 12,
                SUMMAX2NEIGHBOR: 16
            }
        };

        this.grid = {
            gap: 3,
            width: null,
            height: null
        };

        this.landmarkButtons = {
            total: 17,
            width: 30,
            height: 30,
            widthHalf: 15,
            heightHalf: 15,
        };

        // a single button/cell in grid
        this.buttons = {
            width: 30,
            height: 30,
            isDynamic: false
        };

        this.host = {
            url: 'http://localhost:3000'
        };

        this.experiment = {
            repetitions: 5,
            startButton: {
                width: 60,
                height: 50,
            }
        };

        this.experiment.startButton.widthHalf = this.experiment.startButton.width / 2;
        this.experiment.startButton.heightHalf = this.experiment.startButton.height / 2;
    };
}

export { Config };