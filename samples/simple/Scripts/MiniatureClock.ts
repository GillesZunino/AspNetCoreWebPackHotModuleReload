export default class MiniatureClock {
    
    private span: HTMLSpanElement;
    private iteration: number;
    private setIntervalId: number = -1;

    public constructor(clockSpan: HTMLSpanElement) {
        this.span = clockSpan;
        this.iteration = 0;
    }

    public start(): void {
        this.setIntervalId = window.setInterval(() => this.updateClockDisplay(), 1000);
    }

    public stop():void {
        if (this.setIntervalId !== -1) {
            window.clearInterval(this.setIntervalId);
            this.setIntervalId = -1;
        }

        this.iteration = 0;
    }

    private updateClockDisplay(): void {
        this.iteration += 1;

        const today: Date = new Date();
        this.span.textContent = `Time: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} - Iteration ${this.iteration}`;
    }
}