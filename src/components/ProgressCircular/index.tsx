import react, { useEffect, useState } from 'react';
import './style.css'
type ProgressCircularProps = {
    size:number,
    progress:number,
    strokeWidth:number,
    circleOneStroke:string,
    circleTwoStroke:string,
    text?:string
}
export const ProgressCircular = ({size,progress,strokeWidth,circleOneStroke,circleTwoStroke,text}:ProgressCircularProps) => {
    const [offset, setOffset] = useState(0);

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((500 - progress) / 500) * circumference;
        setOffset(progressOffset);


    }, [setOffset, progress, circumference, offset]);
    return(
        <>
                <svg
                className="svg"
                width={size}
                height={size}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text 
                    x={`${center}`} 
                    y={`${center}`} 
                    className="svg-circle-text">
                        {progress}{text}
                </text>
            </svg>
        </>
    )
}