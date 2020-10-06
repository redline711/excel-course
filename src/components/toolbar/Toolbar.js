import { ExcelComponent } from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
	static className = 'excel__toolbar'

	constructor($root) {
		super($root, { name: 'Toolbar', listeners: ['click'] })
	}

	toHTML() {
		return
	}

	onClick(event) {
		console.log(event.target)
	}
}
