import Rectangle from "./Rectangle.js";

/**
 * @class
 * The application that creates the drawing zone and handle Rectangle Drawing
 */
export default class App {
    constructor() {
        this.divId = 0;
        this.isFirstClick = true;
        this.currentRectangle = undefined;
        this.rectangles = [];
        this.rectanglesDivToRemove = [];
        this.rectanglesDiv = [];
        this.timeout = undefined;
        this.minimalAreaDifference = undefined;
        this.root = document.getElementById("root");
        this.resetButton = document.querySelector(".reset");
        this.paintButton = document.querySelector(".paint");
        this.logInfosButton = document.querySelector(".logInfos");
        this.debugCheckbox = document.querySelector(".debugCheckbox");
        this.darkThemeCheckbox = document.querySelector(".darkThemeCheckbox");
        this.utils = document.querySelector(".utils");
        this.utils.style.display = "none";
        this.#addListeners();
        this.#handleWindowResize();
    }

    /**
     * @private_method
     * Adds the event listeners.
     */
    #addListeners() {
        ["mousedown", "mousemove"].forEach((event) =>
            this.root.addEventListener(event, (e) => this.#handleRootClick(e))
        );
        window.addEventListener("resize", () => {
            this.#handleWindowResize();
        });
        this.resetButton.addEventListener("click", () => {
            this.#handleReset();
        });
        this.paintButton.addEventListener("click", () => {
            this.#handlePaint();
        });
        this.logInfosButton.addEventListener("click", () => {
            this.#handleLogInfos();
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
    #handleWindowResize() {
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
    #handleRootClick(e) {
        if (e.type === "mousedown") {
            if (this.isFirstClick) {
                this.currentRectangle = new Rectangle(
                    e.clientX,
                    e.clientY,
                    this.divId,
                    this
                );
                this.isFirstClick = !this.isFirstClick;
            } else {
                this.currentRectangle.displayRectangle(e.clientX, e.clientY);
                if (this.currentRectangle.area > 0) {
                    this.rectangles.push(this.currentRectangle);
                    this.divId++;
                }
                this.currentRectangle.div.addEventListener("dblclick", (e) =>
                    this.currentRectangle.handleDoubleClick(e)
                );
                this.isFirstClick = !this.isFirstClick;
            }
        }
        if (e.type === "mousemove" && !this.isFirstClick) {
            this.currentRectangle.displayRectangle(e.clientX, e.clientY);
        }
    }

    /**
     * @private_method
     * Reset the application variables, empty the drawing zone.
     */
    #handleReset() {
        this.rectanglesDiv = document.querySelectorAll(".subdiv");
        this.rectanglesDiv.forEach((element) => element.remove());
        this.rectangles = [];
        this.currentRectangle = null;
        this.divId = 0;
        this.isFirstClick = true;
        this.minimalAreaDifference = {
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
    #handlePaint() {
        if (this.rectangles.length >= 2) {
            this.minimalAreaDifference = {
                firstRect: null,
                secondRect: null,
                value: Number.MAX_VALUE,
            };
            this.rectangles.sort((rect1, rect2) =>
                rect1.area < rect2.area ? -1 : rect1.area > rect2.area ? 1 : 0
            );
            for (let i = 0; i < this.rectangles.length - 1; i++) {
                if (
                    this.rectangles[i + 1].area - this.rectangles[i].area <
                    this.minimalAreaDifference.value
                ) {
                    this.minimalAreaDifference.value =
                        this.rectangles[i + 1].area - this.rectangles[i].area;
                    this.minimalAreaDifference.firstRect = this.rectangles[i];
                    this.minimalAreaDifference.secondRect =
                        this.rectangles[i + 1];
                }
            }
            this.minimalAreaDifference.firstRect.setRandomColor();
            this.minimalAreaDifference.secondRect.div.style.backgroundColor =
                this.minimalAreaDifference.firstRect.div.style.backgroundColor;
        }
    }

    /**
     * @private_method
     * Log to the console informations about the current important variables.
     */
    #handleLogInfos() {
        console.log("------ START LOG ------");
        console.log("allRect : ", this.rectangles);
        console.log("workingRect : ", this.currentRectangle);
        console.log("isFirstClick : ", this.isFirstClick);
        console.log("offset : ", this.offset);
        console.log("------ ENG LOG ------");
    }
}
