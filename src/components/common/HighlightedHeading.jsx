import React from 'react';

const HighlightedHeading = ({ level = 'h2', className = '', children, highlightColor = '#fab03f' }) => {
    const Tag = level;

    if (typeof children !== 'string') {
        return <Tag className={className}>{children}</Tag>;
    }

    const words = children.split(' ');
    const processedWords = words.map((word, index) => {
        // Highlight 1st (index 0) and 3rd (index 2) words
        if (index === 0 || index === 2) {
            return (
                <span key={index} style={{ color: highlightColor }}>
                    {word}{index < words.length - 1 ? ' ' : ''}
                </span>
            );
        }
        return word + (index < words.length - 1 ? ' ' : '');
    });

    return <Tag className={className}>{processedWords}</Tag>;
};

export default HighlightedHeading;
