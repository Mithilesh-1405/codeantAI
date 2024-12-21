import repo from '../data/repo.json'
import navlink from '../data/navlink.json'
import '../stlying/login.css'
import { useState } from 'react';

function Repository() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    function handleMenu() {
        setMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <div className=" flex flex-col justify-center xlg:flex-row">
                <div className="xlg:hidden fixed top-0 left-0 right-0 bg-white z-50 px-4 py-[20px] xs:border ">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[11px]'>
                            <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.9923 1.0334C23.5038 1.12838 22.7439 1.34549 22.2961 1.50832C21.8483 1.67115 20.8985 2.09179 20.1929 2.44458C19.4873 2.79738 18.2661 3.51654 17.4791 4.04573C16.6921 4.57493 15.4709 5.51119 14.7653 6.14894C14.0597 6.77312 13.0827 7.73652 12.5942 8.29285C12.1057 8.83562 11.2373 9.93471 10.6403 10.7217C10.0568 11.5087 9.16125 12.8521 8.6592 13.7069C8.14357 14.5618 7.3837 16.0001 6.94949 16.8956C6.52885 17.7912 5.90467 19.2295 5.57902 20.0844C5.23979 20.9392 4.81915 22.2554 4.62918 23.0017C4.37137 24.0601 4.27638 24.8336 4.22211 26.5297C4.16783 27.9544 4.20854 29.0535 4.31709 29.7184C4.41208 30.2748 4.62918 31.1296 4.79201 31.6181C4.95484 32.1066 5.26693 32.8393 5.47046 33.2464C5.674 33.6535 6.10821 34.3319 6.4203 34.739C6.73239 35.1461 7.28872 35.7295 7.65508 36.028C8.02145 36.3266 8.78132 36.8286 9.33765 37.1407C9.89398 37.4664 11.278 38.0905 12.3907 38.5248C13.5169 38.9725 15.1588 39.556 16.0543 39.8274C16.9499 40.0988 18.4154 40.438 19.3109 40.6008C20.6543 40.8315 21.3191 40.8586 23.1103 40.8044C24.6978 40.7501 25.5798 40.6687 26.3668 40.4516C26.9639 40.3023 27.968 39.9088 28.5922 39.5967C29.3249 39.2303 30.0169 38.7419 30.5054 38.2669C30.926 37.8463 31.4417 37.1678 31.6588 36.7065C31.998 36.0145 32.0659 35.7024 32.1066 34.6033C32.1473 33.572 32.093 33.0564 31.8216 32.0252C31.6452 31.3196 31.2381 30.1391 30.9261 29.4199C30.6275 28.6872 30.0576 27.5202 29.6641 26.8418C29.2706 26.1498 28.4972 24.9692 27.9273 24.2229C27.371 23.4767 26.4211 22.3776 25.8241 21.7669C25.227 21.1699 24.2365 20.2879 23.6259 19.7994C23.0288 19.3245 22.4318 18.931 22.3097 18.931C22.1876 18.931 22.0926 18.9581 22.0926 18.9989C22.0926 19.0396 22.4725 19.4331 22.9203 19.8808C23.3816 20.3286 24.0872 21.0885 24.4807 21.577C24.8742 22.0655 25.2135 22.5132 25.2135 22.5947C25.2135 22.6761 24.5893 22.0655 23.8159 21.2378C23.0424 20.41 22.079 19.4873 21.6719 19.1753C21.2649 18.8632 20.5728 18.3882 20.1251 18.1169C19.6773 17.8591 18.8224 17.4791 18.2254 17.2756C17.3705 17.0042 16.8549 16.9228 15.783 16.9228C14.8874 16.9092 14.1682 16.9906 13.6798 17.1399C13.2727 17.262 12.6485 17.547 12.2957 17.7776L11.6444 18.1847C11.4273 17.5063 11.373 17.0856 11.373 16.8278C11.373 16.57 11.4951 15.9594 11.6308 15.4709C11.7801 14.9824 12.2007 14.1276 12.5807 13.5712C12.947 13.0149 13.6662 12.1058 14.1682 11.5494C14.6839 11.0067 15.593 10.179 16.19 9.73118C16.7871 9.2834 17.8048 8.65922 18.4696 8.33356C19.121 8.0079 20.1793 7.57369 20.8442 7.37016C21.9162 7.0445 22.2283 7.00379 24.2636 7.00379C26.0005 6.99022 26.7468 7.0445 27.5881 7.24804C28.1851 7.38373 29.1621 7.66868 29.7591 7.88578C30.3561 8.10289 31.1432 8.50996 31.5095 8.79491C31.8895 9.06629 32.3779 9.55478 32.595 9.86687C32.8257 10.179 33.1514 10.6674 33.3278 10.9524C33.4906 11.2373 33.8163 11.5766 34.0334 11.7123C34.264 11.8344 34.6033 11.9429 34.7932 11.9429C34.9968 11.9429 35.2953 11.7801 35.5395 11.5359C35.8516 11.2102 35.933 11.0067 35.933 10.5589C35.933 10.1654 35.7973 9.74475 35.5395 9.29697C35.336 8.9306 34.7661 8.26572 34.2912 7.83151C33.8163 7.3973 32.9614 6.81382 32.4051 6.52887C31.8487 6.23035 30.9939 5.87756 30.5054 5.7283C30.0169 5.57904 29.0399 5.38907 28.3344 5.29409C27.5066 5.17197 26.5025 5.14483 25.5527 5.19911C24.725 5.25338 23.5445 5.41621 22.9067 5.5519C22.269 5.70116 21.292 5.98611 20.7357 6.17608C20.1793 6.37962 19.3245 6.74598 18.836 6.99022C18.3475 7.23447 17.3977 7.80437 16.7328 8.25215C16.0679 8.69993 14.996 9.54121 14.3718 10.1382C13.7476 10.7217 12.7978 11.7801 12.2686 12.4857C11.7258 13.1913 11.0202 14.2632 10.6946 14.8603C10.1789 15.7694 10.0704 15.8915 10.0432 15.6066C10.0161 15.4166 10.1925 14.6839 10.4232 13.9783C10.6538 13.2727 11.0881 12.2279 11.3866 11.6716C11.6851 11.1152 12.255 10.2332 12.6621 9.70404C13.0556 9.18841 13.829 8.33356 14.3718 7.81794C14.9281 7.28874 15.8915 6.52887 16.5293 6.1218C17.167 5.71473 18.1847 5.14483 18.8089 4.85988C19.4195 4.57493 20.5186 4.16786 21.2377 3.95075C21.9705 3.74721 22.9881 3.4894 23.5173 3.40799C24.0465 3.313 25.1728 3.19088 26.0276 3.12304C27.2353 3.02805 27.6423 2.94664 27.8323 2.75667C27.968 2.62098 28.0765 2.33603 28.0765 2.10536C28.0765 1.86111 27.9544 1.58973 27.7645 1.41333C27.5881 1.2505 27.3167 1.04697 27.1403 0.965553C26.9775 0.884139 26.394 0.816294 25.8512 0.829863C25.322 0.829863 24.4807 0.924846 23.9923 1.0334ZM14.1954 20.9667C13.8291 21.0752 13.3406 21.3737 13.0963 21.618C12.8114 21.8893 12.5943 22.2964 12.4857 22.7306C12.3772 23.1241 12.35 23.6398 12.4043 23.9518C12.445 24.2504 12.6214 24.766 12.7707 25.1052C12.9335 25.4444 13.3948 26.0551 13.8155 26.4757C14.2904 26.9642 14.9417 27.4255 15.6473 27.7783C16.2444 28.0768 17.1942 28.4975 17.7505 28.6875C18.3069 28.891 19.7723 29.3659 21.0071 29.7458C22.5404 30.2208 23.5038 30.4379 24.033 30.4514C24.7386 30.465 24.8607 30.4243 25.1592 30.0986C25.3492 29.868 25.4849 29.5423 25.4849 29.3116C25.4849 29.0945 25.3899 28.6739 25.2678 28.4025C25.1592 28.1176 24.7929 27.5205 24.4808 27.0727C24.1551 26.625 23.1103 25.458 22.1469 24.4675C21.0749 23.3684 20.0301 22.4592 19.4467 22.0793C18.9175 21.7537 18.1305 21.3466 17.6827 21.1702C17.2078 20.9938 16.4479 20.8445 15.8509 20.8174C15.186 20.7767 14.6161 20.831 14.1819 20.9667H14.1954Z" fill="#181D27" />
                                <path d="M3.63864 19.6366C3.16372 20.2201 2.55311 21.0885 2.26816 21.577C1.98321 22.0655 1.58971 22.8796 1.38617 23.4088C1.18263 23.938 0.911253 24.7793 0.775562 25.3085C0.639872 25.8377 0.463474 26.8961 0.382059 27.6831C0.287076 28.66 0.287076 29.5285 0.382059 30.4647C0.463474 31.211 0.639872 32.283 0.789131 32.8393C0.924822 33.3956 1.20977 34.2505 1.41331 34.739C1.63041 35.2275 1.92893 35.8516 2.10533 36.1366C2.28173 36.408 2.6481 36.8965 2.91948 37.195C3.20443 37.5071 3.80147 38.0227 4.24925 38.3348C4.69703 38.6604 5.42976 39.0947 5.87754 39.3253C6.32531 39.5424 7.28872 39.9224 8.00788 40.153C8.74061 40.3837 9.67688 40.6144 10.0975 40.6822C10.6403 40.7501 10.8845 40.7365 11.0066 40.6008C11.1152 40.4832 11.1242 40.3882 11.0338 40.3159C10.9524 40.248 10.3418 39.9088 9.67688 39.556C8.99842 39.2032 8.00788 38.6062 7.45155 38.2127C6.89522 37.8327 6.09464 37.1814 5.68757 36.7743C5.26693 36.3673 4.66989 35.6617 4.37137 35.2139C4.05928 34.7661 3.69291 34.1555 3.54365 33.857C3.38083 33.5585 3.13658 32.9207 2.98732 32.4322C2.83806 31.9438 2.63453 31.0075 2.55311 30.329C2.43099 29.3928 2.41742 28.7686 2.53954 27.6152C2.63453 26.8011 2.82449 25.5392 2.98732 24.8336C3.13658 24.128 3.47581 22.9339 3.73362 22.1876C3.99143 21.4413 4.39851 20.4643 4.61561 20.0165C4.83272 19.5688 4.99555 19.0803 4.96841 18.931C4.94127 18.7818 4.83272 18.6461 4.69703 18.6189C4.56133 18.5918 4.1814 18.9446 3.63864 19.6366Z" fill="#181D27" />
                            </svg>
                            <h2 className="text-[30px] font-regular">CodeAnt AI</h2>
                        </div>
                        <button onClick={handleMenu} className="hover:cursor-pointer">
                            {!isMenuOpen ? (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18" fill="none">
                                    <path d="M0 1.125C0 0.515625 0.46875 0 1.125 0H19.875C20.4844 0 21 0.515625 21 1.125C21 1.78125 20.4844 2.25 19.875 2.25H1.125C0.46875 2.25 0 1.78125 0 1.125ZM0 8.625C0 8.01562 0.46875 7.5 1.125 7.5H19.875C20.4844 7.5 21 8.01562 21 8.625C21 9.28125 20.4844 9.75 19.875 9.75H1.125C0.46875 9.75 0 9.28125 0 8.625ZM19.875 17.25H1.125C0.46875 17.25 0 16.7812 0 16.125C0 15.5156 0.46875 15 1.125 15H19.875C20.4844 15 21 15.5156 21 16.125C21 16.7812 20.4844 17.25 19.875 17.25Z" fill="#181D27" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none">
                                    <path d="M14.6484 13.1016C15.0703 13.5703 15.0703 14.2734 14.6484 14.6953C14.1797 15.1641 13.4766 15.1641 13.0547 14.6953L7.52344 9.11719L1.94531 14.6953C1.47656 15.1641 0.773438 15.1641 0.351562 14.6953C-0.117188 14.2734 -0.117188 13.5703 0.351562 13.1016L5.92969 7.52344L0.351562 1.94531C-0.117188 1.47656 -0.117188 0.773438 0.351562 0.351562C0.773438 -0.117188 1.47656 -0.117188 1.89844 0.351562L7.52344 5.97656L13.1016 0.398438C13.5234 -0.0703125 14.2266 -0.0703125 14.6484 0.398438C15.1172 0.820312 15.1172 1.52344 14.6484 1.99219L9.07031 7.52344L14.6484 13.1016Z" fill="#181D27" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="fixed inset-0 bg-[#6C6C6C4D] z-40 xlg:hidden" onClick={handleMenu} />
                )}
                <div className="items-center justify-start border xlg:h-screen xs:h-auto p-[16px] border-[#E9EAEB] cs:w-[18%] xlg:w-[25%] xlg:flex xlg:flex-col">
                    <div className='flex items-center justify-start xlg:pb-[20px] xs:pb-0'>
                        <div className='flex items-center gap-[11px]'>
                            <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.9923 1.0334C23.5038 1.12838 22.7439 1.34549 22.2961 1.50832C21.8483 1.67115 20.8985 2.09179 20.1929 2.44458C19.4873 2.79738 18.2661 3.51654 17.4791 4.04573C16.6921 4.57493 15.4709 5.51119 14.7653 6.14894C14.0597 6.77312 13.0827 7.73652 12.5942 8.29285C12.1057 8.83562 11.2373 9.93471 10.6403 10.7217C10.0568 11.5087 9.16125 12.8521 8.6592 13.7069C8.14357 14.5618 7.3837 16.0001 6.94949 16.8956C6.52885 17.7912 5.90467 19.2295 5.57902 20.0844C5.23979 20.9392 4.81915 22.2554 4.62918 23.0017C4.37137 24.0601 4.27638 24.8336 4.22211 26.5297C4.16783 27.9544 4.20854 29.0535 4.31709 29.7184C4.41208 30.2748 4.62918 31.1296 4.79201 31.6181C4.95484 32.1066 5.26693 32.8393 5.47046 33.2464C5.674 33.6535 6.10821 34.3319 6.4203 34.739C6.73239 35.1461 7.28872 35.7295 7.65508 36.028C8.02145 36.3266 8.78132 36.8286 9.33765 37.1407C9.89398 37.4664 11.278 38.0905 12.3907 38.5248C13.5169 38.9725 15.1588 39.556 16.0543 39.8274C16.9499 40.0988 18.4154 40.438 19.3109 40.6008C20.6543 40.8315 21.3191 40.8586 23.1103 40.8044C24.6978 40.7501 25.5798 40.6687 26.3668 40.4516C26.9639 40.3023 27.968 39.9088 28.5922 39.5967C29.3249 39.2303 30.0169 38.7419 30.5054 38.2669C30.926 37.8463 31.4417 37.1678 31.6588 36.7065C31.998 36.0145 32.0659 35.7024 32.1066 34.6033C32.1473 33.572 32.093 33.0564 31.8216 32.0252C31.6452 31.3196 31.2381 30.1391 30.9261 29.4199C30.6275 28.6872 30.0576 27.5202 29.6641 26.8418C29.2706 26.1498 28.4972 24.9692 27.9273 24.2229C27.371 23.4767 26.4211 22.3776 25.8241 21.7669C25.227 21.1699 24.2365 20.2879 23.6259 19.7994C23.0288 19.3245 22.4318 18.931 22.3097 18.931C22.1876 18.931 22.0926 18.9581 22.0926 18.9989C22.0926 19.0396 22.4725 19.4331 22.9203 19.8808C23.3816 20.3286 24.0872 21.0885 24.4807 21.577C24.8742 22.0655 25.2135 22.5132 25.2135 22.5947C25.2135 22.6761 24.5893 22.0655 23.8159 21.2378C23.0424 20.41 22.079 19.4873 21.6719 19.1753C21.2649 18.8632 20.5728 18.3882 20.1251 18.1169C19.6773 17.8591 18.8224 17.4791 18.2254 17.2756C17.3705 17.0042 16.8549 16.9228 15.783 16.9228C14.8874 16.9092 14.1682 16.9906 13.6798 17.1399C13.2727 17.262 12.6485 17.547 12.2957 17.7776L11.6444 18.1847C11.4273 17.5063 11.373 17.0856 11.373 16.8278C11.373 16.57 11.4951 15.9594 11.6308 15.4709C11.7801 14.9824 12.2007 14.1276 12.5807 13.5712C12.947 13.0149 13.6662 12.1058 14.1682 11.5494C14.6839 11.0067 15.593 10.179 16.19 9.73118C16.7871 9.2834 17.8048 8.65922 18.4696 8.33356C19.121 8.0079 20.1793 7.57369 20.8442 7.37016C21.9162 7.0445 22.2283 7.00379 24.2636 7.00379C26.0005 6.99022 26.7468 7.0445 27.5881 7.24804C28.1851 7.38373 29.1621 7.66868 29.7591 7.88578C30.3561 8.10289 31.1432 8.50996 31.5095 8.79491C31.8895 9.06629 32.3779 9.55478 32.595 9.86687C32.8257 10.179 33.1514 10.6674 33.3278 10.9524C33.4906 11.2373 33.8163 11.5766 34.0334 11.7123C34.264 11.8344 34.6033 11.9429 34.7932 11.9429C34.9968 11.9429 35.2953 11.7801 35.5395 11.5359C35.8516 11.2102 35.933 11.0067 35.933 10.5589C35.933 10.1654 35.7973 9.74475 35.5395 9.29697C35.336 8.9306 34.7661 8.26572 34.2912 7.83151C33.8163 7.3973 32.9614 6.81382 32.4051 6.52887C31.8487 6.23035 30.9939 5.87756 30.5054 5.7283C30.0169 5.57904 29.0399 5.38907 28.3344 5.29409C27.5066 5.17197 26.5025 5.14483 25.5527 5.19911C24.725 5.25338 23.5445 5.41621 22.9067 5.5519C22.269 5.70116 21.292 5.98611 20.7357 6.17608C20.1793 6.37962 19.3245 6.74598 18.836 6.99022C18.3475 7.23447 17.3977 7.80437 16.7328 8.25215C16.0679 8.69993 14.996 9.54121 14.3718 10.1382C13.7476 10.7217 12.7978 11.7801 12.2686 12.4857C11.7258 13.1913 11.0202 14.2632 10.6946 14.8603C10.1789 15.7694 10.0704 15.8915 10.0432 15.6066C10.0161 15.4166 10.1925 14.6839 10.4232 13.9783C10.6538 13.2727 11.0881 12.2279 11.3866 11.6716C11.6851 11.1152 12.255 10.2332 12.6621 9.70404C13.0556 9.18841 13.829 8.33356 14.3718 7.81794C14.9281 7.28874 15.8915 6.52887 16.5293 6.1218C17.167 5.71473 18.1847 5.14483 18.8089 4.85988C19.4195 4.57493 20.5186 4.16786 21.2377 3.95075C21.9705 3.74721 22.9881 3.4894 23.5173 3.40799C24.0465 3.313 25.1728 3.19088 26.0276 3.12304C27.2353 3.02805 27.6423 2.94664 27.8323 2.75667C27.968 2.62098 28.0765 2.33603 28.0765 2.10536C28.0765 1.86111 27.9544 1.58973 27.7645 1.41333C27.5881 1.2505 27.3167 1.04697 27.1403 0.965553C26.9775 0.884139 26.394 0.816294 25.8512 0.829863C25.322 0.829863 24.4807 0.924846 23.9923 1.0334ZM14.1954 20.9667C13.8291 21.0752 13.3406 21.3737 13.0963 21.618C12.8114 21.8893 12.5943 22.2964 12.4857 22.7306C12.3772 23.1241 12.35 23.6398 12.4043 23.9518C12.445 24.2504 12.6214 24.766 12.7707 25.1052C12.9335 25.4444 13.3948 26.0551 13.8155 26.4757C14.2904 26.9642 14.9417 27.4255 15.6473 27.7783C16.2444 28.0768 17.1942 28.4975 17.7505 28.6875C18.3069 28.891 19.7723 29.3659 21.0071 29.7458C22.5404 30.2208 23.5038 30.4379 24.033 30.4514C24.7386 30.465 24.8607 30.4243 25.1592 30.0986C25.3492 29.868 25.4849 29.5423 25.4849 29.3116C25.4849 29.0945 25.3899 28.6739 25.2678 28.4025C25.1592 28.1176 24.7929 27.5205 24.4808 27.0727C24.1551 26.625 23.1103 25.458 22.1469 24.4675C21.0749 23.3684 20.0301 22.4592 19.4467 22.0793C18.9175 21.7537 18.1305 21.3466 17.6827 21.1702C17.2078 20.9938 16.4479 20.8445 15.8509 20.8174C15.186 20.7767 14.6161 20.831 14.1819 20.9667H14.1954Z" fill="#181D27" />
                                <path d="M3.63864 19.6366C3.16372 20.2201 2.55311 21.0885 2.26816 21.577C1.98321 22.0655 1.58971 22.8796 1.38617 23.4088C1.18263 23.938 0.911253 24.7793 0.775562 25.3085C0.639872 25.8377 0.463474 26.8961 0.382059 27.6831C0.287076 28.66 0.287076 29.5285 0.382059 30.4647C0.463474 31.211 0.639872 32.283 0.789131 32.8393C0.924822 33.3956 1.20977 34.2505 1.41331 34.739C1.63041 35.2275 1.92893 35.8516 2.10533 36.1366C2.28173 36.408 2.6481 36.8965 2.91948 37.195C3.20443 37.5071 3.80147 38.0227 4.24925 38.3348C4.69703 38.6604 5.42976 39.0947 5.87754 39.3253C6.32531 39.5424 7.28872 39.9224 8.00788 40.153C8.74061 40.3837 9.67688 40.6144 10.0975 40.6822C10.6403 40.7501 10.8845 40.7365 11.0066 40.6008C11.1152 40.4832 11.1242 40.3882 11.0338 40.3159C10.9524 40.248 10.3418 39.9088 9.67688 39.556C8.99842 39.2032 8.00788 38.6062 7.45155 38.2127C6.89522 37.8327 6.09464 37.1814 5.68757 36.7743C5.26693 36.3673 4.66989 35.6617 4.37137 35.2139C4.05928 34.7661 3.69291 34.1555 3.54365 33.857C3.38083 33.5585 3.13658 32.9207 2.98732 32.4322C2.83806 31.9438 2.63453 31.0075 2.55311 30.329C2.43099 29.3928 2.41742 28.7686 2.53954 27.6152C2.63453 26.8011 2.82449 25.5392 2.98732 24.8336C3.13658 24.128 3.47581 22.9339 3.73362 22.1876C3.99143 21.4413 4.39851 20.4643 4.61561 20.0165C4.83272 19.5688 4.99555 19.0803 4.96841 18.931C4.94127 18.7818 4.83272 18.6461 4.69703 18.6189C4.56133 18.5918 4.1814 18.9446 3.63864 19.6366Z" fill="#181D27" />
                            </svg>
                            <h2 className="text-[30px] font-regular">CodeAnt AI</h2>
                        </div>
                        {!isMenuOpen && <svg onClick={handleMenu} className="xs:flex xlg:hidden ml-auto hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 18" fill="none">
                            <path d="M0 1.125C0 0.515625 0.46875 0 1.125 0H19.875C20.4844 0 21 0.515625 21 1.125C21 1.78125 20.4844 2.25 19.875 2.25H1.125C0.46875 2.25 0 1.78125 0 1.125ZM0 8.625C0 8.01562 0.46875 7.5 1.125 7.5H19.875C20.4844 7.5 21 8.01562 21 8.625C21 9.28125 20.4844 9.75 19.875 9.75H1.125C0.46875 9.75 0 9.28125 0 8.625ZM19.875 17.25H1.125C0.46875 17.25 0 16.7812 0 16.125C0 15.5156 0.46875 15 1.125 15H19.875C20.4844 15 21 15.5156 21 16.125C21 16.7812 20.4844 17.25 19.875 17.25Z" fill="#181D27" />
                        </svg>}
                        {isMenuOpen && <svg onClick={handleMenu} className="xs:flex xlg:hidden ml-auto hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M14.6484 13.1016C15.0703 13.5703 15.0703 14.2734 14.6484 14.6953C14.1797 15.1641 13.4766 15.1641 13.0547 14.6953L7.52344 9.11719L1.94531 14.6953C1.47656 15.1641 0.773438 15.1641 0.351562 14.6953C-0.117188 14.2734 -0.117188 13.5703 0.351562 13.1016L5.92969 7.52344L0.351562 1.94531C-0.117188 1.47656 -0.117188 0.773438 0.351562 0.351562C0.773438 -0.117188 1.47656 -0.117188 1.89844 0.351562L7.52344 5.97656L13.1016 0.398438C13.5234 -0.0703125 14.2266 -0.0703125 14.6484 0.398438C15.1172 0.820312 15.1172 1.52344 14.6484 1.99219L9.07031 7.52344L14.6484 13.1016Z" fill="#181D27" />
                        </svg>}
                    </div>
                    <div className={`flex flex-col w-full ${isMenuOpen ? 'block' : 'hidden'} xs:absolute xs:top-[80px] xs:left-0 xs:w-full xs:z-50 xs:shadow-lg xs:px-[16px] xs:bg-white xlg:block xlg:relative xlg:top-0 xlg:left-0 xlg:w-full xlg:z-0 xlg:shadow-none xlg:px-0 xlg:bg-transparent xlg:flex-1`}>
                        <div className='flex items-center justify-start gap-[8px] border border-[#D5D7DA] py-[8px] px-[12px] rounded-[8px] xlg:flex mb-[16px] w-full'>
                            <h2>Mithilesh Yadawad</h2>
                            <svg className='ml-auto' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7616 1.68173L7.79282 7.40048C7.60532 7.55673 7.41782 7.61923 7.26157 7.61923C7.07407 7.61923 6.88657 7.55673 6.73032 7.43173L0.730318 1.68173C0.417818 1.40048 0.417818 0.900484 0.699068 0.619234C0.980318 0.306734 1.48032 0.306734 1.76157 0.587984L7.26157 5.83798L12.7303 0.587984C13.0116 0.306734 13.5116 0.306734 13.7928 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z" fill="#181D27" />
                            </svg>
                        </div>
                        <div className='flex-1 links'>
                            <ul className='flex flex-col items-start justify-start text-[16px] font-[600] h-full'>
                                {navlink.map((item, index) => (
                                    <li key={index} className='flex items-start justify-start gap-[8px] px-[14px] py-[10px] rounded-[8px] w-full mb-[4px]'>
                                        <svg
                                            xmlns={item.svg.smlns}
                                            width={item.svg.width}
                                            height={item.svg.height}
                                            viewBox={item.svg.viewBox}
                                            fill={item.svg.fill}
                                        >
                                            <path d={item.svg.icon.path} fill={item.svg.icon.fill} />
                                        </svg>
                                        <h2>{item.linkName}</h2>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`cs:w-[82%] xlg:w-[75%] xlg:m-[24px] xlg:border xlg:rounded-[12px]`}>
                    <div className="px-[16px] py-[20px] border-[#E9EAEB] ">
                        <div className="flex flex-col mb-[16px] xlg:flex-row">
                            <div className="mb-[12px]">
                                <h2 className="text-[24px] font-[600] mb-[4px]">Repositories</h2>
                                <p className="text-[16px] font-[400]">33 total repositories</p>
                            </div>
                            <div className="flex items-center gap-[12px] xlg:ml-auto">
                                <div className="flex items-center justify-center gap-[4px] border-[1px] border-[#D5D7DA py-[10px] px-[14px] rounded-[8px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.9609 11.4102C16.418 11.5508 16.6641 12.0078 16.5234 12.4648C15.5391 15.8047 12.4453 18.125 8.96484 18.125C6.1875 18.125 3.62109 16.6133 2.21484 14.2578V17.8438C2.21484 18.3359 1.86328 18.6875 1.37109 18.6875C0.914062 18.6875 0.527344 18.3359 0.527344 17.8438V12.2188C0.527344 11.7617 0.914062 11.375 1.37109 11.375H6.99609C7.48828 11.375 7.83984 11.7617 7.83984 12.2188C7.83984 12.7109 7.45312 13.0625 6.99609 13.0625H3.44531C4.5 15.1016 6.60938 16.4375 8.96484 16.4375C11.707 16.4375 14.168 14.6094 14.9062 11.9727C15.0469 11.5156 15.5039 11.2695 15.9609 11.4102ZM16.5938 1.8125C17.0508 1.8125 17.4375 2.19922 17.4375 2.65625V8.28125C17.4375 8.77344 17.0508 9.125 16.5938 9.125H10.9688C10.4766 9.125 10.125 8.77344 10.125 8.28125C10.125 7.82422 10.4766 7.4375 10.9688 7.4375H14.4844C13.4297 5.43359 11.3203 4.0625 9 4.0625C6.25781 4.0625 3.79688 5.92578 3.02344 8.52734C2.91797 8.98438 2.46094 9.23047 2.00391 9.08984C1.54688 8.98438 1.30078 8.49219 1.40625 8.07031C2.39062 4.73047 5.51953 2.375 9 2.375C11.7773 2.375 14.3438 3.92188 15.75 6.27734V2.65625C15.75 2.19922 16.1016 1.8125 16.5938 1.8125Z" fill="#414651" />
                                    </svg>
                                    <button >Refresh all</button>
                                </div>
                                <div className="flex items-center justify-center bg-[#1570EF] text-white font-[400] gap-[4px] border-[1px] border-[#D5D7DA py-[10px] px-[14px] rounded-[8px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.1875 10.25C15.1875 10.7422 14.8008 11.0938 14.3438 11.0938H8.71875V16.7188C8.71875 17.2109 8.33203 17.5977 7.875 17.5977C7.38281 17.5977 7.03125 17.2109 7.03125 16.7188V11.0938H1.40625C0.914062 11.0938 0.5625 10.7422 0.5625 10.2852C0.5625 9.79297 0.914062 9.40625 1.40625 9.40625H7.03125V3.78125C7.03125 3.32422 7.38281 2.97266 7.875 2.97266C8.33203 2.97266 8.71875 3.32422 8.71875 3.78125V9.40625H14.3438C14.8008 9.40625 15.1875 9.79297 15.1875 10.25Z" fill="white" />
                                    </svg>
                                    <button >Add Repository</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start py-[10px] px-[14px] gap-[4px] border border-[#D5D7DA] rounded-[8px] max-w-[408px] xlg:border-b-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.7188 19.8086C18.0703 20.1602 18.0703 20.6875 17.7188 21.0039C17.5781 21.1797 17.3672 21.25 17.1562 21.25C16.9102 21.25 16.6992 21.1797 16.5234 21.0039L11.8125 16.293C10.5469 17.3125 8.96484 17.875 7.27734 17.875C3.26953 17.875 0 14.6055 0 10.5625C0 6.55469 3.23438 3.25 7.27734 3.25C11.2852 3.25 14.5898 6.55469 14.5898 10.5625C14.5898 12.2852 14.0273 13.8672 13.0078 15.0977L17.7188 19.8086ZM1.6875 10.5625C1.6875 13.6914 4.18359 16.1875 7.3125 16.1875C10.4062 16.1875 12.9375 13.6914 12.9375 10.5625C12.9375 7.46875 10.4062 4.9375 7.3125 4.9375C4.18359 4.9375 1.6875 7.46875 1.6875 10.5625Z" fill="#414651" />
                            </svg>
                            <input type="text" placeholder="Search repositories" className='w-full h-[20px] border-0 outline-none' />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col border-[#E9EAEB]">
                            {repo.map((item, index) => (
                                <div key={index} className=' p-[16px] border-t-[1px] border-[#D5D7DA]'>
                                    <div className="flex items-center gap-[8px] mb-[12px]">
                                        <p className="font-[500]">{item.title}</p>
                                        <div className="rounded-[1999px] border border-[#B2DDFF] px-[10px] py-[2px] bg-[#EFF8FF]">
                                            <p className="text-[#175CD3]">{item.privacy}</p>
                                        </div>
                                    </div>
                                    <ul className="flex gap-[24px]">
                                        <li className="flex items-center gap-[8px]">
                                            <p className="text-[14px] font-[400]">{item.lang}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <circle cx="4" cy="4" r="4" fill="#1570EF" />
                                            </svg>
                                        </li>
                                        <li className="flex items-center gap-[8px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                <path d="M5.25 12C2.34375 12 0 11.1797 0 10.125V1.875C0 0.84375 2.34375 0 5.25 0C8.13281 0 10.5 0.84375 10.5 1.875V10.125C10.5 11.1797 8.13281 12 5.25 12ZM9.375 2.03906L9.35156 2.01562C9.23438 1.92188 8.97656 1.75781 8.57812 1.61719C7.78125 1.33594 6.58594 1.125 5.25 1.125C3.89062 1.125 2.69531 1.33594 1.89844 1.61719C1.5 1.75781 1.24219 1.92188 1.125 2.01562V4.10156C1.42969 4.26562 1.85156 4.42969 2.39062 4.57031C3.1875 4.75781 4.17188 4.875 5.25 4.875C6.30469 4.875 7.28906 4.75781 8.08594 4.57031C8.625 4.42969 9.04688 4.26562 9.375 4.10156V2.03906ZM9.375 5.34375C9.04688 5.46094 8.71875 5.57812 8.34375 5.67188C7.45312 5.88281 6.375 6 5.25 6C4.10156 6 3.02344 5.88281 2.13281 5.67188C1.75781 5.57812 1.42969 5.46094 1.125 5.34375V7.10156C1.42969 7.26562 1.85156 7.42969 2.39062 7.57031C3.1875 7.75781 4.17188 7.875 5.25 7.875C6.30469 7.875 7.28906 7.75781 8.08594 7.57031C8.625 7.42969 9.04688 7.26562 9.375 7.10156V5.34375ZM1.125 10.0078C1.24219 10.1016 1.5 10.2656 1.89844 10.4062C2.69531 10.6875 3.89062 10.875 5.22656 10.875C6.58594 10.875 7.78125 10.6875 8.57812 10.4062C8.97656 10.2656 9.23438 10.1016 9.35156 10.0078L9.375 9.98438V8.34375C9.04688 8.46094 8.71875 8.57812 8.34375 8.67188C7.45312 8.88281 6.375 9 5.22656 9C4.10156 9 3.02344 8.88281 2.13281 8.67188C1.75781 8.57812 1.42969 8.46094 1.10156 8.34375V9.98438L1.125 10.0078ZM9.42188 9.9375L9.39844 9.96094C9.42188 9.9375 9.42188 9.9375 9.42188 9.9375ZM1.07812 9.96094C1.07812 9.9375 1.05469 9.9375 1.05469 9.9375L1.07812 9.96094ZM1.07812 2.0625C1.05469 2.08594 1.05469 2.08594 1.05469 2.08594L1.07812 2.0625ZM9.42188 2.08594C9.42188 2.08594 9.42188 2.08594 9.39844 2.0625L9.42188 2.08594Z" fill="#181D27" />
                                            </svg>
                                            <p className="text-[14px] font-[400]">{item.size}</p>
                                        </li>
                                        <li>
                                            <p className="text-[14px] font-[400]">{item.updated}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Repository