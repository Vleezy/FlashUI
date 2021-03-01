﻿import { IVector3D } from './IVector3D';
import { Vector3d } from './Vector3d';

export class ColorConverter
{
    public static int2rgb(color: number): string
    {
        color >>>= 0;
        const b = color & 0xFF;
        const g = (color & 0xFF00) >>> 8;
        const r = (color & 0xFF0000) >>> 16;
        const a = ( (color & 0xFF000000) >>> 24 ) / 255;

        return 'rgba(' + [r, g, b, 1].join(',') + ')';
    }

    public static _Str_22130(k: number): number
    {
        const _local_2: number = (((k >> 16) & 0xFF) / 0xFF);
        const _local_3: number = (((k >> 8) & 0xFF) / 0xFF);
        const _local_4: number = ((k & 0xFF) / 0xFF);
        const _local_5: number = Math.max(_local_2, _local_3, _local_4);
        const _local_6: number = Math.min(_local_2, _local_3, _local_4);
        const _local_7: number = (_local_5 - _local_6);
        let _local_8 = 0;
        let _local_9 = 0;
        let _local_10 = 0;
        if(_local_7 == 0)
        {
            _local_8 = 0;
        }
        else
        {
            if(_local_5 == _local_2)
            {
                if(_local_3 > _local_4)
                {
                    _local_8 = ((60 * (_local_3 - _local_4)) / _local_7);
                }
                else
                {
                    _local_8 = (((60 * (_local_3 - _local_4)) / _local_7) + 360);
                }
            }
            else
            {
                if(_local_5 == _local_3)
                {
                    _local_8 = (((60 * (_local_4 - _local_2)) / _local_7) + 120);
                }
                else
                {
                    if(_local_5 == _local_4)
                    {
                        _local_8 = (((60 * (_local_2 - _local_3)) / _local_7) + 240);
                    }
                }
            }
        }
        _local_9 = (0.5 * (_local_5 + _local_6));
        if(_local_7 == 0)
        {
            _local_10 = 0;
        }
        else
        {
            if(_local_9 <= 0.5)
            {
                _local_10 = ((_local_7 / _local_9) * 0.5);
            }
            else
            {
                _local_10 = ((_local_7 / (1 - _local_9)) * 0.5);
            }
        }
        const _local_11: number = Math.round(((_local_8 / 360) * 0xFF));
        const _local_12: number = Math.round((_local_10 * 0xFF));
        const _local_13: number = Math.round((_local_9 * 0xFF));
        const _local_14: number = (((_local_11 << 16) + (_local_12 << 8)) + _local_13);
        return _local_14;
    }

    public static _Str_13949(k: number): number
    {
        let _local_12: number;
        let _local_13: number;
        let _local_14: number;
        let _local_15: number;
        let _local_16: number;
        const _local_2: number = (((k >> 16) & 0xFF) / 0xFF);
        const _local_3: number = (((k >> 8) & 0xFF) / 0xFF);
        const _local_4: number = ((k & 0xFF) / 0xFF);
        let _local_5 = 0;
        let _local_6 = 0;
        let _local_7 = 0;
        if(_local_3 > 0)
        {
            _local_12 = 0;
            _local_13 = 0;
            if(_local_4 < 0.5)
            {
                _local_12 = (_local_4 * (1 + _local_3));
            }
            else
            {
                _local_12 = ((_local_4 + _local_3) - (_local_4 * _local_3));
            }
            _local_13 = ((2 * _local_4) - _local_12);
            _local_14 = (_local_2 + (1 / 3));
            _local_15 = _local_2;
            _local_16 = (_local_2 - (1 / 3));
            if(_local_14 < 0)
            {
                _local_14 = (_local_14 + 1);
            }
            else
            {
                if(_local_14 > 1)
                {
                    _local_14--;
                }
            }
            if(_local_15 < 0)
            {
                _local_15 = (_local_15 + 1);
            }
            else
            {
                if(_local_15 > 1)
                {
                    _local_15--;
                }
            }
            if(_local_16 < 0)
            {
                _local_16 = (_local_16 + 1);
            }
            else
            {
                if(_local_16 > 1)
                {
                    _local_16--;
                }
            }
            if((_local_14 * 6) < 1)
            {
                _local_5 = (_local_13 + (((_local_12 - _local_13) * 6) * _local_14));
            }
            else
            {
                if((_local_14 * 2) < 1)
                {
                    _local_5 = _local_12;
                }
                else
                {
                    if((_local_14 * 3) < 2)
                    {
                        _local_5 = (_local_13 + (((_local_12 - _local_13) * 6) * ((2 / 3) - _local_14)));
                    }
                    else
                    {
                        _local_5 = _local_13;
                    }
                }
            }
            if((_local_15 * 6) < 1)
            {
                _local_6 = (_local_13 + (((_local_12 - _local_13) * 6) * _local_15));
            }
            else
            {
                if((_local_15 * 2) < 1)
                {
                    _local_6 = _local_12;
                }
                else
                {
                    if((_local_15 * 3) < 2)
                    {
                        _local_6 = (_local_13 + (((_local_12 - _local_13) * 6) * ((2 / 3) - _local_15)));
                    }
                    else
                    {
                        _local_6 = _local_13;
                    }
                }
            }
            if((_local_16 * 6) < 1)
            {
                _local_7 = (_local_13 + (((_local_12 - _local_13) * 6) * _local_16));
            }
            else
            {
                if((_local_16 * 2) < 1)
                {
                    _local_7 = _local_12;
                }
                else
                {
                    if((_local_16 * 3) < 2)
                    {
                        _local_7 = (_local_13 + (((_local_12 - _local_13) * 6) * ((2 / 3) - _local_16)));
                    }
                    else
                    {
                        _local_7 = _local_13;
                    }
                }
            }
        }
        else
        {
            _local_5 = _local_4;
            _local_6 = _local_4;
            _local_7 = _local_4;
        }
        const _local_8: number = Math.round((_local_5 * 0xFF));
        const _local_9: number = Math.round((_local_6 * 0xFF));
        const _local_10: number = Math.round((_local_7 * 0xFF));
        const _local_11: number = (((_local_8 << 16) + (_local_9 << 8)) + _local_10);
        return _local_11;
    }

    public static rgb2xyz(k: number): IVector3D
    {
        let _local_2: number = (((k >> 16) & 0xFF) / 0xFF);
        let _local_3: number = (((k >> 8) & 0xFF) / 0xFF);
        let _local_4: number = (((k >> 0) & 0xFF) / 0xFF);
        if(_local_2 > 0.04045)
        {
            _local_2 = Math.pow(((_local_2 + 0.055) / 1.055), 2.4);
        }
        else
        {
            _local_2 = (_local_2 / 12.92);
        }
        if(_local_3 > 0.04045)
        {
            _local_3 = Math.pow(((_local_3 + 0.055) / 1.055), 2.4);
        }
        else
        {
            _local_3 = (_local_3 / 12.92);
        }
        if(_local_4 > 0.04045)
        {
            _local_4 = Math.pow(((_local_4 + 0.055) / 1.055), 2.4);
        }
        else
        {
            _local_4 = (_local_4 / 12.92);
        }
        _local_2 = (_local_2 * 100);
        _local_3 = (_local_3 * 100);
        _local_4 = (_local_4 * 100);
        return new Vector3d((((_local_2 * 0.4124) + (_local_3 * 0.3576)) + (_local_4 * 0.1805)), (((_local_2 * 0.2126) + (_local_3 * 0.7152)) + (_local_4 * 0.0722)), (((_local_2 * 0.0193) + (_local_3 * 0.1192)) + (_local_4 * 0.9505)));
    }

    public static _Str_22784(k:IVector3D):IVector3D
    {
        let _local_2: number = (k.x / 95.047);
        let _local_3: number = (k.y / 100);
        let _local_4: number = (k.z / 108.883);
        if(_local_2 > 0.008856)
        {
            _local_2 = Math.pow(_local_2, (1 / 3));
        }
        else
        {
            _local_2 = ((7.787 * _local_2) + (16 / 116));
        }
        if(_local_3 > 0.008856)
        {
            _local_3 = Math.pow(_local_3, (1 / 3));
        }
        else
        {
            _local_3 = ((7.787 * _local_3) + (16 / 116));
        }
        if(_local_4 > 0.008856)
        {
            _local_4 = Math.pow(_local_4, (1 / 3));
        }
        else
        {
            _local_4 = ((7.787 * _local_4) + (16 / 116));
        }
        return new Vector3d(((116 * _local_3) - 16), (500 * (_local_2 - _local_3)), (200 * (_local_3 - _local_4)));
    }

    public static rgb2CieLab(k: number):IVector3D
    {
        return ColorConverter._Str_22784(ColorConverter.rgb2xyz(k));
    }
}