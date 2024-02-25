import { App, inject } from 'vue'

const loggerSymbol = Symbol('logger-plugin')

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'log'

export class Logger {
  debug(...args: any): void {
    this.invoke('debug', ...args)
  }

  info(...args: any): void {
    this.invoke('info', ...args)
  }

  warn(...args: any): void {
    this.invoke('warn', ...args)
  }

  error(...args: any): void {
    this.invoke('error', ...args)
  }

  log(...args: any): void {
    this.invoke('log', ...args)
  }

  private async invoke(level: LogLevel, ...args: any) {
    console[level](...args)
  }
}

export function createLogger() {
  const logger = new Logger();
  const install = (app: App) => {
    app.provide(loggerSymbol, logger)
  }
  return install;
}

export function useLogger(): Logger {
  const logger = inject<Logger>(loggerSymbol)
  if (!logger) {
    throw new Error('logger: not initialize!!')
  }
  return logger
}
