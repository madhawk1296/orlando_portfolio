export default function Vase({ selected }: { selected: boolean }) {
    return (
        <svg className={`h-full smoothe ${selected ? "stroke-gray-800" : "stroke-gray-400"}`} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M151.706 103.982C118.221 122.079 102.166 132.319 97.161 150.905C82.5309 209.201 146.446 309.24 161.05 314.395"  stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M242.465 97.4648C242.025 101.43 241.681 104.458 245.379 106.4C305.064 137.757 302.724 161.277 303.748 171.005C307.491 206.558 268.817 302.411 235.793 315.254" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M164.059 316.113C192.691 322.308 206.195 322.454 234.076 316.298" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M142.737 84.5358C167.142 79.7704 175.943 79.4736 198.92 79.0685C238.185 78.376 252.735 83.1329 254.795 84.3958C259.337 87.1793 257.533 92.2991 257.066 93.6986" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M144.3 94.2476C153.478 91.9371 182.661 89.892 197.466 89.7373C217.917 89.5238 252.905 93.7223 253.986 95.8825C255.328 98.5676 247.871 99.776 247.062 99.9375" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M154.907 95.6843C155.738 98.7354 153.739 102.769 151.705 103.982" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M144.324 94.2476C139.932 95.6844 145.651 100.555 149.476 100.555" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M142.738 84.5359C140.024 86.4916 139.182 91.3383 140.689 94.3529" stroke-opacity="0.9" strokeWidth="20" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}