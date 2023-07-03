class BlinkingCursor {

    constructor(speed, parentElement) {
        this.speed = speed;
        this.parentElement = parentElement;
        this.show = true;
    }

    start = () => {
        this.intervalID = setInterval(() => {
            if (this.show) {
                this.show = false;
                this.render();
            } else {
                this.show = true;
                this.render();
            }
        }, this.speed)
    }

    stop = () => {
        clearInterval(this.intervalID);
        this.show = false;
        this.render();
    }

    render = () => [
        this.show ? this.element.innerHTML = '|' : this.element.innerHTML = ' '
    ]

    init = () => {
        this.element = document.createElement('span');
        this.element.style.display = 'inline-block';
        this.element.style.width = '5px';
        this.parentElement.append(this.element);
    }

}

export {BlinkingCursor};