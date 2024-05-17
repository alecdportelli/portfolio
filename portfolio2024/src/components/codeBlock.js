import React from 'react';

const CodeSnippet = ({ code }) => {
    return (
        <pre>
            <code>{code}</code>
        </pre>
    );
};

export default CodeSnippet;