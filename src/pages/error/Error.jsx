import React from 'react';
import { Link } from 'react-router-dom';
import errorpic from '../../../src/assets/flat-404-error-template_23-2147741200.avif'

const Error = () => {
    return (
        // use daisy ui component
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src={errorpic} />
		
		<Link to='/'><a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a></Link>
	</div>
</section>
        </div>
    );
};

export default Error;