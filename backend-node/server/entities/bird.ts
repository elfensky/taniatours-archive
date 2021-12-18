export class Bird {
	uuid?: string
	id?: string
	name?: string
	short?: string
	image?: string
	recon?: string[]
	food?: Record<string, string>
	see?: string
	// introduction?: sayHello()

	sayHello(params: string) {
		return 'chirp chirp, ik ben een ' + this.name
	}
}
