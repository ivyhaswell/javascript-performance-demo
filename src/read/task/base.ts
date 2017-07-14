/*
 * @Author: shuwen.wang
 * @Date: 2017-07-14 10:57:18
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-14 11:01:36
 */

/**
 * 读取类的抽象父类
 *
 * @export
 * @abstract
 * @class ReadBase
 */
export abstract class ReadBase
{
    /**
     * 读取特定值
     *
     * @abstract
     * @memberof ReadBase
     */
    abstract readSpec(times: number): void

    /**
     * 读取变化值
     *
     * @abstract
     * @memberof ReadBase
     */
    abstract readDync(times: number): void
}
