import React from "react";
import { Link } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
const Breadcrumb = () => {

const breadcrumbs = useBreadcrumbs();

  return (
    <div>
    <nav style={{"padding":"0","margin":"0","marginBottom":"2rem"}} className="relative w-3/4 mx-auto p-0  flex flex-wrap items-center justify-between   hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between ">
      <nav className=" rounded w-full" aria-label="breadcrumb">
        <ol className="list-reset flex">
          {breadcrumbs.map((current) => (
            // {breadcrumbs.map(({ breadcrumb }) => (
            <>
              <li>
                <Link
                  to={current.key}
                  className="text-blue-500 font-bold text-xl   hover:text-green-600"
                >
                  {current.breadcrumb.props.children}
                </Link>
              </li>
              <li>
                <span class="text-blue-500 font-bold mx-2">/</span>
              </li>
            </>
          ))}
        </ol>
      </nav>
    </div>
    </nav>
    </div>


  );
};

export default Breadcrumb;
