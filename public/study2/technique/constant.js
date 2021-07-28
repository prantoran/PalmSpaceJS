
const TechniqueType = {
    Unassigned: 0,
    S2H_Relative: 1,
    S2H_Absolute: 2,
    H2S_Relative: 3,
    H2S_Absolute: 4,
    MidAir: 5,
    FishEye: 6,
    S2H_Relative_Finger: 7,
    H2S_Relative_Finger: 8,
    Landmark_Btn: 9,
    Landmark_Btn_FishEye: 10,
    LayoutGrid: 11,
    LayoutFlow: 12
}


const ReadingDirectionType = {
    Unassigned: 0,
    LtoR: "LtoR",
    RtoL: "RtoL"
};

export {TechniqueType, ReadingDirectionType};