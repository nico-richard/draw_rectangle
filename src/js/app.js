import { Rectangle } from "./rectangle.js";

/**
 * @class
 * The application that creates the drawing zone and handle Rectangle Drawing
 */
export class App {
    constructor() {
        this.divID = 0;
        this.isFirstClick = true;
        this.workingRect = undefined;
        this.allRect = [];
        this.rectDivToRemove = [];
        this.allDivs = [];
        this.timeout = undefined;
        this.minimalAreaDiff = undefined;
        this.root = document.getElementById("root");
        this.resetButton = document.getElementById("reset");
        this.paintButton = document.getElementById("paint");
        this.logInfosButton = document.getElementById("logInfos");
        this.debugCheckbox = document.getElementById("debugCheckbox");
        this.darkThemeCheckbox = document.getElementById("darkThemeCheckbox");
        this.utils = document.getElementById("utils");
        this.utils.style.display = "none";
        this.#addListeners();
        this.#resize();
    }

    /**
     * @private_method
     * Adds the event listeners.
     */
    #addListeners() {
        ["mousedown", "mousemove"].forEach((event) =>
            this.root.addEventListener(event, (e) => this.#rootClick(e))
        );
        window.addEventListener("resize", () => {
            this.#resize();
        });
        this.resetButton.addEventListener("click", () => {
            this.#reset();
        });
        this.paintButton.addEventListener("click", () => {
            this.#paint();
        });
        this.logInfosButton.addEventListener("click", () => {
            this.#logInfos();
        });
        this.debugCheckbox.addEventListener("change", () => {
            this.debugCheckbox.checked
                ? (this.utils.style.display = "flex")
                : (this.utils.style.display = "none");
        });
        this.darkThemeCheckbox.addEventListener("change", () => {
            this.darkThemeCheckbox.checked
                ? (document.documentElement.className = "dark")
                : (document.documentElement.className = "light");
        });
    }

    /**
     * @private_method
     * Handles window resizing.
     */
    #resize() {
        this.offset = [
            this.root.getBoundingClientRect().left,
            this.root.getBoundingClientRect().top,
        ];
    }

    /**
     * @private_method
     * @param {event} e The event object.
     * Handles drawing zone events. Creates a rectangle on first click,
     * then updates it on mouse move and draws it on second click.
     */
    #rootClick(e) {
        if (e.type === "mousedown") {
            if (this.isFirstClick) {
                this.workingRect = new Rectangle(
                    e.clientX,
                    e.clientY,
                    this.divID,
                    this
                );
                this.isFirstClick = !this.isFirstClick;
            } else {
                this.workingRect.display(e.clientX, e.clientY);
                if (this.workingRect.area > 0) {
                    this.allRect.push(this.workingRect);
                    this.divID++;
                }
                this.workingRect.div.addEventListener("dblclick", (e) =>
                    this.workingRect.onDbClick(e)
                );
                this.isFirstClick = !this.isFirstClick;
            }
        }
        if (e.type === "mousemove" && !this.isFirstClick) {
            this.workingRect.display(e.clientX, e.clientY);
        }
    }

    /**
     * @private_method
     * Reset the application variables, empty the drawing zone.
     */
    #reset() {
        this.allDivs = document.querySelectorAll(".subdiv");
        this.allDivs.forEach((element) => element.remove());
        this.allRect = [];
        this.divID = 0;
        this.isFirstClick = true;
        this.minimalAreaDiff = {
            refRect: null,
            targetRect: null,
            value: Number.MAX_VALUE,
        };
    }

    /**
     * @private_method
     * Set same random color to 2 rectangles that have the less area difference.
     * Works only if at least 2 rectangles are drawn.
     */
    #paint() {
        if (this.allRect.length >= 2) {
            this.minimalAreaDiff = {
                firstRect: null,
                secondRect: null,
                value: Number.MAX_VALUE,
            };
            this.allRect.sort((rect1, rect2) =>
                rect1.area < rect2.area ? -1 : rect1.area > rect2.area ? 1 : 0
            );
            for (let i = 0; i < this.allRect.length - 1; i++) {
                if (
                    this.allRect[i + 1].area - this.allRect[i].area <
                    this.minimalAreaDiff.value
                ) {
                    this.minimalAreaDiff.value =
                        this.allRect[i + 1].area - this.allRect[i].area;
                    this.minimalAreaDiff.firstRect = this.allRect[i];
                    this.minimalAreaDiff.secondRect = this.allRect[i + 1];
                }
            }
            this.minimalAreaDiff.firstRect.setRandomColor();
            this.minimalAreaDiff.secondRect.div.style.backgroundColor =
                this.minimalAreaDiff.firstRect.div.style.backgroundColor;
        }
    }

    /**
     * @private_method
     * Log to the console informations about the current important variables.
     */
    #logInfos() {
        console.log("------ START LOG ------");
        console.log("allRect : ", this.allRect);
        console.log("workingRect : ", this.workingRect);
        console.log("isFirstClick : ", this.isFirstClick);
        console.log("offset : ", this.offset);
        console.log("------ ENG LOG ------");
    }
}

export let app = new App();
