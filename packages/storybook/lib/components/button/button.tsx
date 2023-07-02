import React from "react";

// Import required styles.
import "./button.scss";

// Build "button" component.
const Button = ({ type, label, icon, style, color, small, className, ...args }) => {
    let btnClass = 'csb-button';

    switch( style ) {
        case 'primary':
        case 'secondary':
            btnClass += ' ' + 'csb-button--' + style;
            break;


        default:
            // Do nothing.
            break;
    }

    if ( !isUndefined( color ) ) {
        btnClass += ' ' + 'csb-button--' + color;
    }

    if ( !isUndefined( small ) && small ) {
        btnClass += ' ' + 'csb-button--sm';
    }

    if ( !isUndefined( className ) ) {
        btnClass += ' ' + className;
    }

    return (
        <>
            { 'link' !== type && (
                <button className={ btnClass } { ...args }>
                    { !isUndefined( icon ) && (
                        <span className="csb-button__icon">
							<span className={`csb-icon csb-icon--${ icon }`} />
						</span>
                    )}

                    <span className="csb-button__label">
						{ label }
					</span>
                </button>
            )}

            { 'link' === type && (
                <a className={ btnClass } { ...args }>
                    { !isUndefined( icon ) && (
                        <span className="csb-button__icon">
							<span className={`csb-icon csb-icon--${ icon }`} />
						</span>
                    )}

                    <span className="csb-button__label">
						{ label }
					</span>
                </a>
            )}
        </>
    );
}

// Check if element is undefined.
const isUndefined = (element, isNumber = false) => {
    const isValid = 'undefined' !== typeof element;
    const isNotEmpty = '' !== element;

    if ( element && isValid && isNotEmpty ) {
        if ( isNumber ) {
            if ( Number.isNaN(element) ) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}

// Publish required component(s).
export default Button;
