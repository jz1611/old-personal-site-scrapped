// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import BlogPost from '../BlogPost/BlogPost';

// Declare Blog as functional component
export default function Blog() {
    const [page, setPage] = useState(1);

    const PageNav = styled.nav``;
    const PageButton = styled.button``;

    return (
        <div>
            <PageNav>
                <PageButton>
                    Previous
                </PageButton>
                <span>
                    {page}
                </span>
                <PageButton>
                    Next
                </PageButton>
            </PageNav>
            <BlogPost id={0 + 10 *  (page - 1)} summary />
            <BlogPost id={1 + 10 *  (page - 1)} summary />
            <BlogPost id={2 + 10 *  (page - 1)} summary />
            <BlogPost id={3 + 10 *  (page - 1)} summary />
            <BlogPost id={4 + 10 *  (page - 1)} summary />
            <BlogPost id={5 + 10 *  (page - 1)} summary />
            <BlogPost id={6 + 10 *  (page - 1)} summary />
            <BlogPost id={7 + 10 *  (page - 1)} summary />
            <BlogPost id={8 + 10 *  (page - 1)} summary />
            <BlogPost id={9 + 10 *  (page - 1)} summary />
        </div>
    );
}