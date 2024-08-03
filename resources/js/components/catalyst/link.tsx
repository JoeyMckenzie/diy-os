import * as Headless from '@headlessui/react';
import { Link as InertiaLink, type InertiaLinkProps } from '@inertiajs/react';
import type React from 'react';
import { forwardRef } from 'react';

export const Link = forwardRef((
    props: InertiaLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
) => {
    return (
        <Headless.DataInteractive>
            <InertiaLink {...props} ref={ref} />
        </Headless.DataInteractive>
    );
});
