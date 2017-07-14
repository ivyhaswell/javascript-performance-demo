/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 20:11:10
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-13 10:53:19
 */
export class DurationLog
{
    private prefix: string
    private contentStr: string

    constructor(prefix: string = 'task')
    {
        this.prefix = prefix
        this.contentStr = ''
    }

    public start<T>(option: T): void
    {
        for (let key in option) {
            this.contentStr += `[${key}: ${option[key]}]`
        }
        console.time(this.prefix + this.contentStr)
    }

    public end(): void
    {
        console.timeEnd(this.prefix + this.contentStr)
    }
}
