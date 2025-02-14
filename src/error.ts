export abstract class AiScriptError extends Error {
	public info?: any;

	constructor(message: string, info?: any) {
		super(message);

		this.info = info;

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, AiScriptError);
		}
	}
}

export class SyntaxError extends AiScriptError {
	constructor(message: string, info?: any) {
		super(message, info);
	}
}

export class TypeError extends AiScriptError {
	constructor(message: string, info?: any) {
		super(message, info);
	}
}

export class RuntimeError extends AiScriptError {
	constructor(message: string, info?: any) {
		super(message, info);
	}
}

export class IndexOutOfRangeError extends RuntimeError {
	constructor(message: string, info?: any) {
		super(message, info);
	}
}
