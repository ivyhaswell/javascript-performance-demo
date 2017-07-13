/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 20:11:10
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 20:47:16
 */
class DurationLog
{
    private prefix: string
    private option: string[]
    private contentStr: string
    public start: Function
    public end: Function

    constructor(prefix: string = 'task', option: string[])
    {
        this.prefix = prefix
        this.option = option
        this.contentStr = ''
        this.compileOption()
    }

    private compileOption()
    {
        this.start = (...args) =>
        {
            this.option.forEach((item, index) =>
            {
                this.contentStr += `[${item}: ${args[index]}]`
            })
            console.time(this.prefix + this.contentStr)
        }
        this.end = () =>
        {
            console.timeEnd(this.prefix + this.contentStr)
            this.contentStr = ''
        }
    }
}

const durationLog = new DurationLog('tatatatask', ['time', 'number'])
durationLog.start((Date.now()), Math.random())
setTimeout(function() {
    durationLog.end()
}, 1000)
