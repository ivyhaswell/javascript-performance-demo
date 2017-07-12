/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:21:02
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 18:28:38
 */
export class ObjectRead
{
    private obj = {}
    private keyCount: number
    /**
     * Creates an instance of ReadObject.
     * @param {number} [keyNum=10] 对象key的数量
     * @memberof ReadObject
     */
    constructor(keyCount: number = 10)
    {
        for (let i = 0; i < keyCount; i++) {
            Object.defineProperty(this.obj, i.toString(), {
                value: i,
            })
        }
        this.keyCount = keyCount
    }

    /**
     * 读取特定值
     *
     * @param {number} times 读取次数
     * @memberof ReadObject
     */
    public readSpec(times: number)
    {
        console.time('object read time[mode:spec]:')
        for (let i = 0; i < times; i++) {
            this.obj['0']
        }
        console.timeEnd('object read time[mode:spec]:')
    }

    /**
     * 读取动态值
     *
     * @param {number} times
     * @memberof ReadObject
     */
    public readDync(times: number)
    {
        console.time('object read time[mode:random]:')
        for (let i = 0; i < times; i++) {
            this.obj[Math.floor(Math.random() * this.keyCount)]
        }
        console.timeEnd('object read time[mode:random]:')
    }
}
