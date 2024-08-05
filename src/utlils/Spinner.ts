const spinnerFrames = ['|', '/', '-', '\\'];


export function Spin(text) {
    let frameIndex = 0;
    const interval = setInterval(() => {
        process.stdout.write(`\r${spinnerFrames[frameIndex]} ${text}`);
        frameIndex = (frameIndex + 1) % spinnerFrames.length;
    }, 100);

    return {
        stop: () => {
            clearInterval(interval);
            process.stdout.write(`\r${' '.repeat(40)}\r`); // Clear the spinner line
        },
        setText: (newText) => {
            text = newText;
        }
    };
}