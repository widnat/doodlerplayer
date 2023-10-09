import { Component } from '@angular/core';
import { Point, Draw } from '../../types';
import { useDraw } from "../../hooks/doodler";

@Component({
  selector: 'app-drawing-area',
  templateUrl: './drawing-area.component.html'
})
export class DrawingAreaComponent {

}



type Props = {
	action: any;
	actionText: string;
};

export default function DrawingArea({ action, actionText }: Props) {
	const [color, _setColor] = useState<string>("black");
	const colorRef = useRef(color);
	const setColor = (newColor: string) => {
		colorRef.current = newColor;
		_setColor(newColor);
	};
	const { canvasRef, onMouseDown, clear } = useDraw(drawLine);
	const [lineWidth, _setLineWidth] = useState(5);
	const lineWidthRef = useRef(lineWidth);
	const setLineWidth = (newLineWidth: number) => {
		lineWidthRef.current = newLineWidth;
		_setLineWidth(newLineWidth);
	};
	const [canvasWidth, setCanvasWidth] = useState(50);
	const [canvasHeight, setCanvasHeight] = useState(50);
	var canvasTop = 0;
	var lastx = 0;
	var lasty = 0;

	function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
		const { x: currX, y: currY } = currentPoint;
		const lineColor = colorRef.current;

		let startPoint = prevPoint ?? currentPoint;
		ctx.beginPath();
		ctx.lineWidth = lineWidthRef.current;
		ctx.strokeStyle = lineColor;
		ctx.moveTo(startPoint.x, startPoint.y);
		ctx.lineTo(currX, currY);
		ctx.stroke();

		ctx.fillStyle = lineColor;
		ctx.beginPath();
		ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
		ctx.fill();
	}

	function handleResize() {
		setCanvasWidth(window.innerWidth * 0.7);
		setCanvasHeight(window.innerWidth * 0.7);
	}

	useEffect(() => {
		var top = canvasRef.current?.offsetTop;
		canvasTop = top ? top : 0;
		handleResize();
		canvasRef.current?.addEventListener("touchstart", (e) => {
			e.preventDefault();
			lastx = e.touches[0].clientX;
			lasty = e.touches[0].clientY - canvasTop;
			var lastPoint = {
				x: lastx,
				y: lasty,
			} as Point;
			drawLine({
				prevPoint: lastPoint,
				currentPoint: lastPoint,
				ctx: canvasRef.current?.getContext("2d"),
			} as Draw);
		});
		canvasRef.current?.addEventListener("touchmove", (e) => {
			e.preventDefault();
			var newx = e.touches[0].clientX;
			var newy = e.touches[0].clientY - canvasTop;
			var lastPoint = {
				x: lastx,
				y: lasty,
			} as Point;
			var currentPoint = {
				x: newx,
				y: newy,
			} as Point;
			drawLine({
				prevPoint: lastPoint,
				currentPoint: currentPoint,
				ctx: canvasRef.current?.getContext("2d"),
			} as Draw);
			lastx = newx;
			lasty = newy;
		});
	}, []);

	function submit() {
		var doodleURL = canvasRef.current?.toDataURL();
		action(doodleURL);
	}

}