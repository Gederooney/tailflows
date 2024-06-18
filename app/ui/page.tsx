import React from 'react'
import Link from 'next/link'
import { Section as NewsLetter } from '@/components/Newsletter'

function svgToDataURL(svgString: string) {
  // Encode the SVG string using encodeURIComponent, making it safe for inclusion in a URI
  const encoded = encodeURIComponent(svgString)
    // However, encodeURIComponent does not encode a few characters (e.g., - _ . ! ~ * ' ( ) ) which can be part of a valid SVG.
    // Moreover, it encodes spaces as %20, which we need to convert into spaces for compactness and readability.
    .replace(/%20/g, ' ')
    // We also need to replace certain encoded characters to match the data URL specification and SVG content expectations.
    .replace(/%3D/g, '=')
    .replace(/%3A/g, ':')
    .replace(/%2F/g, '/')
    .replace(/%22/g, "'")

  // Construct the data URL with the proper MIME type for SVG images
  return `data:image/svg+xml,${encoded}`
}

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-heroPatternLight dark:bg-heroPatternDark"></div>
      <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-white to-[90%] py-12 space-y-8 dark:to-secondary-900">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="max-w-6xl mx-auto mt-5 text-center">
            <h2 className="block max-w-2xl mx-auto text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200">
              Des interfaces utilisateur (UI) modernes et élégantes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mt-5 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Des exemples d'interfaces utilisateur modernes et réactives créées avec Tailwind CSS
              et HTML5 pour accélérer le développement web. Tous les exemples sont gratuits à
              utiliser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    title: 'Boutons',
    description: '4 formats',
    href: '/ui/bouton',
    image: `<svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_228_9)">
<mask id="mask0_228_9" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="350" height="250">
<path d="M350 0H0V250H350V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_228_9)">
<mask id="mask1_228_9" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="350" height="250">
<path d="M350 0H0V250H350V0Z" fill="white"/>
</mask>
<g mask="url(#mask1_228_9)">
<path d="M350 0H0V250H350V0Z" fill="#F9FAFB"/>
<g filter="url(#filter0_d_228_9)">
<path d="M55 65C55 62.2386 57.2386 60 60 60H290C292.761 60 295 62.2386 295 65V250H55V65Z" fill="white"/>
<path d="M55 65C55 62.2386 57.2386 60 60 60H290C292.761 60 295 62.2386 295 65V75H55V65Z" fill="white"/>
<path d="M62.5 70C63.8807 70 65 68.8807 65 67.5C65 66.1193 63.8807 65 62.5 65C61.1193 65 60 66.1193 60 67.5C60 68.8807 61.1193 70 62.5 70Z" fill="#D1D5DB"/>
<path d="M72.5 70C73.8807 70 75 68.8807 75 67.5C75 66.1193 73.8807 65 72.5 65C71.1193 65 70 66.1193 70 67.5C70 68.8807 71.1193 70 72.5 70Z" fill="#D1D5DB"/>
<path d="M82.5 70C83.8807 70 85 68.8807 85 67.5C85 66.1193 83.8807 65 82.5 65C81.1193 65 80 66.1193 80 67.5C80 68.8807 81.1193 70 82.5 70Z" fill="#D1D5DB"/>
<mask id="mask2_228_9" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="55" y="60" width="240" height="15">
<path d="M55 65C55 62.2386 57.2386 60 60 60H290C292.761 60 295 62.2386 295 65V75H55V65Z" fill="white"/>
</mask>
<g mask="url(#mask2_228_9)">
<path d="M295 76H55V74H295V76Z" fill="#E5E7EB"/>
</g>
<path d="M176.5 120H141.5C140.119 120 139 121.119 139 122.5C139 123.881 140.119 125 141.5 125H176.5C177.881 125 179 123.881 179 122.5C179 121.119 177.881 120 176.5 120Z" fill="#D1D5DB"/>
<path d="M207.5 120H186.5C185.119 120 184 121.119 184 122.5C184 123.881 185.119 125 186.5 125H207.5C208.881 125 210 123.881 210 122.5C210 121.119 208.881 120 207.5 120Z" fill="#D1D5DB"/>
<g filter="url(#filter1_d_228_9)">
<path d="M150.179 142.545H115.821C114.362 142.545 113.179 143.197 113.179 144C113.179 144.803 114.362 145.455 115.821 145.455H150.179C151.638 145.455 152.821 144.803 152.821 144C152.821 143.197 151.638 142.545 150.179 142.545Z" fill="#E5E7EB"/>
<path d="M166.036 136H99.9643C97.7749 136 96 136.977 96 138.182V149.818C96 151.023 97.7749 152 99.9643 152H166.036C168.225 152 170 151.023 170 149.818V138.182C170 136.977 168.225 136 166.036 136Z" stroke="#E5E7EB"/>
<path d="M166.036 163H99.9643C97.7749 163 96 163.977 96 165.182V176.818C96 178.023 97.7749 179 99.9643 179H166.036C168.225 179 170 178.023 170 176.818V165.182C170 163.977 168.225 163 166.036 163Z" stroke="#E5E7EB"/>
</g>
<g filter="url(#filter2_d_228_9)">
<path d="M234.179 142.545H199.821C198.362 142.545 197.179 143.197 197.179 144C197.179 144.803 198.362 145.455 199.821 145.455H234.179C235.638 145.455 236.821 144.803 236.821 144C236.821 143.197 235.638 142.545 234.179 142.545Z" fill="#E5E7EB"/>
<path d="M250.036 136H183.964C181.775 136 180 136.977 180 138.182V149.818C180 151.023 181.775 152 183.964 152H250.036C252.225 152 254 151.023 254 149.818V138.182C254 136.977 252.225 136 250.036 136Z" stroke="#E5E7EB"/>
</g>
<g filter="url(#filter3_d_228_9)">
<path d="M192.179 196.545H157.821C156.362 196.545 155.179 197.197 155.179 198C155.179 198.803 156.362 199.455 157.821 199.455H192.179C193.638 199.455 194.821 198.803 194.821 198C194.821 197.197 193.638 196.545 192.179 196.545Z" fill="#E300BF"/>
<path d="M208.036 190H141.964C139.775 190 138 190.977 138 192.182V203.818C138 205.023 139.775 206 141.964 206H208.036C210.225 206 212 205.023 212 203.818V192.182C212 190.977 210.225 190 208.036 190Z" stroke="#EE5FD7"/>
</g>
<g filter="url(#filter4_d_228_9)">
<path d="M234.179 169.545H199.821C198.362 169.545 197.179 170.197 197.179 171C197.179 171.803 198.362 172.455 199.821 172.455H234.179C235.638 172.455 236.821 171.803 236.821 171C236.821 170.197 235.638 169.545 234.179 169.545Z" fill="#E5E7EB"/>
<path d="M250.036 163H183.964C181.775 163 180 163.977 180 165.182V176.818C180 178.023 181.775 179 183.964 179H250.036C252.225 179 254 178.023 254 176.818V165.182C254 163.977 252.225 163 250.036 163Z" stroke="#E5E7EB"/>
</g>
<path d="M295 250.5H295.5V250V65C295.5 61.9624 293.038 59.5 290 59.5H60C56.9624 59.5 54.5 61.9624 54.5 65V250V250.5H55H295Z" stroke="#E5E7EB"/>
</g>
<path d="M350 175H0V250H350V175Z" fill="url(#paint0_linear_228_9)"/>
</g>
<path d="M193.135 108.1C192.649 108.1 192.215 108.017 191.835 107.85C191.455 107.683 191.155 107.457 190.935 107.17C190.715 106.877 190.592 106.55 190.565 106.19H192.255C192.275 106.383 192.365 106.54 192.525 106.66C192.685 106.78 192.882 106.84 193.115 106.84C193.329 106.84 193.492 106.8 193.605 106.72C193.725 106.633 193.785 106.523 193.785 106.39C193.785 106.23 193.702 106.113 193.535 106.04C193.369 105.96 193.099 105.873 192.725 105.78C192.325 105.687 191.992 105.59 191.725 105.49C191.459 105.383 191.229 105.22 191.035 105C190.842 104.773 190.745 104.47 190.745 104.09C190.745 103.77 190.832 103.48 191.005 103.22C191.185 102.953 191.445 102.743 191.785 102.59C192.132 102.437 192.542 102.36 193.015 102.36C193.715 102.36 194.265 102.533 194.665 102.88C195.072 103.227 195.305 103.687 195.365 104.26H193.785C193.759 104.067 193.672 103.913 193.525 103.8C193.385 103.687 193.199 103.63 192.965 103.63C192.765 103.63 192.612 103.67 192.505 103.75C192.399 103.823 192.345 103.927 192.345 104.06C192.345 104.22 192.429 104.34 192.595 104.42C192.769 104.5 193.035 104.58 193.395 104.66C193.809 104.767 194.145 104.873 194.405 104.98C194.665 105.08 194.892 105.247 195.085 105.48C195.285 105.707 195.389 106.013 195.395 106.4C195.395 106.727 195.302 107.02 195.115 107.28C194.935 107.533 194.672 107.733 194.325 107.88C193.985 108.027 193.589 108.1 193.135 108.1Z" fill="#E300BF"/>
<path d="M187.527 102.38C188.18 102.38 188.7 102.593 189.087 103.02C189.48 103.44 189.677 104.02 189.677 104.76V108.02H187.977V104.99C187.977 104.617 187.88 104.327 187.687 104.12C187.494 103.913 187.234 103.81 186.907 103.81C186.58 103.81 186.32 103.913 186.127 104.12C185.934 104.327 185.837 104.617 185.837 104.99V108.02H184.127V102.44H185.837V103.18C186.01 102.933 186.244 102.74 186.537 102.6C186.83 102.453 187.16 102.38 187.527 102.38Z" fill="#E300BF"/>
<path d="M180.3 108.1C179.753 108.1 179.26 107.983 178.82 107.75C178.386 107.517 178.043 107.183 177.79 106.75C177.543 106.317 177.42 105.81 177.42 105.23C177.42 104.657 177.546 104.153 177.8 103.72C178.053 103.28 178.4 102.943 178.84 102.71C179.28 102.477 179.773 102.36 180.32 102.36C180.866 102.36 181.36 102.477 181.8 102.71C182.24 102.943 182.586 103.28 182.84 103.72C183.093 104.153 183.22 104.657 183.22 105.23C183.22 105.803 183.09 106.31 182.83 106.75C182.576 107.183 182.226 107.517 181.78 107.75C181.34 107.983 180.846 108.1 180.3 108.1ZM180.3 106.62C180.626 106.62 180.903 106.5 181.13 106.26C181.363 106.02 181.48 105.677 181.48 105.23C181.48 104.783 181.366 104.44 181.14 104.2C180.92 103.96 180.646 103.84 180.32 103.84C179.986 103.84 179.71 103.96 179.49 104.2C179.27 104.433 179.16 104.777 179.16 105.23C179.16 105.677 179.266 106.02 179.48 106.26C179.7 106.5 179.973 106.62 180.3 106.62Z" fill="#E300BF"/>
<path d="M176.807 106.57V108.02H175.937C175.317 108.02 174.834 107.87 174.487 107.57C174.141 107.263 173.967 106.767 173.967 106.08V103.86H173.287V102.44H173.967V101.08H175.677V102.44H176.797V103.86H175.677V106.1C175.677 106.267 175.717 106.387 175.797 106.46C175.877 106.533 176.011 106.57 176.197 106.57H176.807Z" fill="#E300BF"/>
<path d="M172.469 102.44V108.02H170.759V107.26C170.586 107.507 170.349 107.707 170.049 107.86C169.756 108.007 169.429 108.08 169.069 108.08C168.642 108.08 168.266 107.987 167.939 107.8C167.612 107.607 167.359 107.33 167.179 106.97C166.999 106.61 166.909 106.187 166.909 105.7V102.44H168.609V105.47C168.609 105.843 168.706 106.133 168.899 106.34C169.092 106.547 169.352 106.65 169.679 106.65C170.012 106.65 170.276 106.547 170.469 106.34C170.662 106.133 170.759 105.843 170.759 105.47V102.44H172.469Z" fill="#E300BF"/>
<path d="M163.132 108.1C162.585 108.1 162.092 107.983 161.652 107.75C161.218 107.517 160.875 107.183 160.622 106.75C160.375 106.317 160.252 105.81 160.252 105.23C160.252 104.657 160.378 104.153 160.632 103.72C160.885 103.28 161.232 102.943 161.672 102.71C162.112 102.477 162.605 102.36 163.152 102.36C163.698 102.36 164.192 102.477 164.632 102.71C165.072 102.943 165.418 103.28 165.672 103.72C165.925 104.153 166.052 104.657 166.052 105.23C166.052 105.803 165.922 106.31 165.662 106.75C165.408 107.183 165.058 107.517 164.612 107.75C164.172 107.983 163.678 108.1 163.132 108.1ZM163.132 106.62C163.458 106.62 163.735 106.5 163.962 106.26C164.195 106.02 164.312 105.677 164.312 105.23C164.312 104.783 164.198 104.44 163.972 104.2C163.752 103.96 163.478 103.84 163.152 103.84C162.818 103.84 162.542 103.96 162.322 104.2C162.102 104.433 161.992 104.777 161.992 105.23C161.992 105.677 162.098 106.02 162.312 106.26C162.532 106.5 162.805 106.62 163.132 106.62Z" fill="#E300BF"/>
<path d="M158.25 104.42C158.657 104.507 158.983 104.71 159.23 105.03C159.477 105.343 159.6 105.703 159.6 106.11C159.6 106.697 159.393 107.163 158.98 107.51C158.573 107.85 158.003 108.02 157.27 108.02H154V101H157.16C157.873 101 158.43 101.163 158.83 101.49C159.237 101.817 159.44 102.26 159.44 102.82C159.44 103.233 159.33 103.577 159.11 103.85C158.897 104.123 158.61 104.313 158.25 104.42ZM155.71 103.84H156.83C157.11 103.84 157.323 103.78 157.47 103.66C157.623 103.533 157.7 103.35 157.7 103.11C157.7 102.87 157.623 102.687 157.47 102.56C157.323 102.433 157.11 102.37 156.83 102.37H155.71V103.84ZM156.97 106.64C157.257 106.64 157.477 106.577 157.63 106.45C157.79 106.317 157.87 106.127 157.87 105.88C157.87 105.633 157.787 105.44 157.62 105.3C157.46 105.16 157.237 105.09 156.95 105.09H155.71V106.64H156.97Z" fill="#E300BF"/>
</g>
</g>
<defs>
<filter id="filter0_d_228_9" x="49" y="57" width="252" height="202" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.596078 0 0 0 0 0.643137 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_9" result="shape"/>
</filter>
<filter id="filter1_d_228_9" x="92.5" y="134.5" width="81" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.866667 0 0 0 0 0.917647 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_9" result="shape"/>
</filter>
<filter id="filter2_d_228_9" x="176.5" y="134.5" width="81" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.866667 0 0 0 0 0.917647 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_9" result="shape"/>
</filter>
<filter id="filter3_d_228_9" x="134.5" y="188.5" width="81" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.866667 0 0 0 0 0.917647 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_9" result="shape"/>
</filter>
<filter id="filter4_d_228_9" x="176.5" y="161.5" width="81" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.866667 0 0 0 0 0.917647 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_9" result="shape"/>
</filter>
<linearGradient id="paint0_linear_228_9" x1="175" y1="175" x2="175" y2="250" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F4F6" stop-opacity="0"/>
<stop offset="0.685417" stop-color="#F3F4F6"/>
</linearGradient>
<clipPath id="clip0_228_9">
<rect width="350" height="250" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  },
]

export default function Page() {
  return (
    <div className="py-6 mx-auto max-w-7xl">
      <Hero />
      <section className="px-4 py-4">
        <div className=""></div>
        <div className="grid grid-cols-2 gap-4 text-start md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {data.map((block, index) => (
            <Link
              key={block.href}
              href={block.href}
              className="relative rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg dark:bg-[#151c2f] dark:before:border-gray-700 dark:before:hover:border-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 overflow-hidden"
            >
              <div className="relative pt-[50%]">
                <img
                  src={svgToDataURL(block.image)}
                  alt=""
                  className="absolute top-0 object-cover w-full h-full start-0 rounded-t-xl"
                />
              </div>
              <div className="p-4 bg-gray-100 dark:bg-secondary-900">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {block.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
                  {block.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <NewsLetter />
    </div>
  )
}
