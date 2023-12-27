import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
    return <div class="p-10">
        <button class="w-32 h-32 rounded-full bg-black text-white">
            Shop Now<br />
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} />
        </button>
    </div>

}

export default Button