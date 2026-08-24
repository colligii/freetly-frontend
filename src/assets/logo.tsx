export default function Logo({ width, height }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={width}
            height={height}
        >
            <defs>
                <linearGradient id="fleetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
            </defs>
            <rect x={0} y={0} width={100} height={100} rx={20} fill="#0F172A" />
            <path
                d="M 28 62 L 50 40 L 72 62"
                fill="none"
                stroke="#38BDF8"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M 28 42 L 50 20 L 72 42"
                fill="none"
                stroke="url(#fleetGradient)"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx={50} cy={78} r={6} fill="#38BDF8" />
        </svg>

    )
}

export interface LogoProps {
    width: string,
    height: string
}