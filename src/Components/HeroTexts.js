import React, { useState, useEffect, useRef } from 'react';
import HeroInput from './HeroInput';

function HeroTexts() {
    const [isVisible, setIsVisible] = useState(false);
    const heroInputRef = useRef(null);

    const handleClickOutside = (event) => {
        if (heroInputRef.current && !heroInputRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);

    return (
        <div className='p-6 flex'>
            <div className='absolute flex justify-center left-[60vh] z-[20]'>
                {isVisible && (
                    <div ref={heroInputRef}>
                        <HeroInput />
                    </div>
                )}
            </div>

            <div>
                <h1 className='text-7xl  text-wrap font-extrabold hover:text-red-500'>WHICH SUPER HERO ARE YOU ?</h1>
                <p className='my-4'>
                    Welcome to SuperHeroRealm, where your destiny as a superhero awaits! Our cutting-edge system dives deep into your unique personality traits, preferences, and values to reveal the superhero within you. By analyzing a series of insightful questions tailored to uncover your inner strengths and hidden potentials, our platform generates a personalized superhero profile that reflects your true essence. Whether you’re a fearless warrior with unmatched courage, a brilliant mind with unparalleled intellect, or a compassionate soul with a heart full of empathy, SuperHeroRealm ensures that your superhero identity aligns perfectly with who you are. Embark on a journey of self-discovery, unleash your superpowers, and find out which legendary hero embodies your spirit. With our innovative generator, you’re not just imagining your superhero persona—you’re stepping into a world where your true heroism is brought to life!
                </p>
                <button
                    onClick={() => setIsVisible(true)}
                    className='bg-white hover:border-2 hover:border-white rounded-full my-4 py-2 text-black text-xl font-md w-full hover:bg-transparent hover:text-white hover:border-white'
                >
                    Find now
                </button>
            </div>
        </div>
    );
}

export default HeroTexts;
