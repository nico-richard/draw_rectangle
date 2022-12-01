/**
 * @Class
 * The rectangle created on click
 */
export class Rectangle {
    /**
     * @param {number} left The left position of the rectangle.
     * @param {number} top The top position of the rectangle.
     * @param {number} id The incremental id of the rectangle.
     * @param {Appliction} app The application where the rectangle is drawn.
     */
    constructor(left, top, id, app) {
        this.app = app;
        this.top = top - this.app.offset[1];
        this.left = left - this.app.offset[0];
        this.div = document.createElement("div");
        this.div.setAttribute("class", `subdiv subdiv-${id}`);
        this.div.style.position = "absolute";
        this.div.style.top = `${top}px`;
        this.div.style.left = `${left}px`;
        this.newAllRect = [];
        root.appendChild(this.div);
        this.area = 0;
        this.setRandomColor();
        this.rotate360 = [
            { transform: "rotate(0)" },
            { transform: "rotate(360deg)" },
        ];
    }

    /**
     * @method
     * Set random color to the current rectangle.
     */
    setRandomColor() {
        let color = "";
        while (color.length < 7) {
            color += Math.random().toString(16);
        }
        this.div.style.backgroundColor = "#" + color.slice(-6);
    }

    /**
     * @method
     * Displays the rectangle in the drawing area depending on the right and bottom positions.
     * @param {number} right The right position.
     * @param {number} bottom The bottom position.
     */
    display(right, bottom) {
        right -= this.app.offset[0];
        bottom -= this.app.offset[1];
        right > this.left
            ? (this.div.style.left = `${this.left}px`)
            : (this.div.style.left = `${right}px`);
        bottom > this.top
            ? (this.div.style.top = `${this.top}px`)
            : (this.div.style.top = `${bottom}px`);
        this.div.style.width = `${Math.abs(right - this.left)}px`;
        this.div.style.height = `${Math.abs(bottom - this.top)}px`;
        this.area = this.div.clientWidth * this.div.clientHeight;
    }

    /**
     * @private_method
     * Handles multiple rectangles removal.
     * Kills the current timeout if a rectangle is in the deletion queue.
     * Then sets the same timeout.
     * @param {function} func The callback function.
     * @param {number} timing The timeout in milliseconds.
     */
    #handleRectRemoval(func, timing) {
        window.clearTimeout(this.app.timeout);
        this.app.timeout = window.setTimeout(func, timing);
    }
    /**
     * @method
     * On double click, animates the rectangle and removes it from the drawing zone.
     * If an other remove event is triggered, wait for the last animation to finish before queue deletion.
     * @param {event} e The event object.
     */
    onDbClick(e) {
        e.stopPropagation();
        e.target.animate(this.rotate360, { duration: 900 });
        this.app.rectDivToRemove.push(e.target);
        this.#handleRectRemoval(() => {
            this.app.allRect = this.app.allRect.filter((rect) => {
                return !this.app.rectDivToRemove.includes(rect.div);
            });
            this.app.rectDivToRemove.forEach((rect) => {
                rect.remove();
            });
        }, 1000);
    }
}
