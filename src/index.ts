/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 19:38:09
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 19:38:31
 */
import { ReadTask } from './read'

const counts: number[] = [1, 100, 100 * 100, 100 * 100 * 100]
const times: number[] = [1, 1000, 1000 * 1000, 1000 * 1000 * 1000]

const readTask = new ReadTask()

function runTask()
{
    while (counts.length) {
        readTask.count = counts.shift()
        for (let i of times) {
            readTask.readSpec(i)
            readTask.readDync(i)
        }
    }
}
