// This will be used in src/base/Main.ts

export interface OnReady{

    status : "SUCCESS" | "FAIL" | "N/A";
    message:string;
    error?: any; 
};