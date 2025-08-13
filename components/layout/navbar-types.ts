import { menuEntries } from '@/menu.config';

export type NavbarSegmentPath = (typeof menuEntries)[keyof typeof menuEntries];

export type NavbarSegmentData = {
    name: string;
    id: string;
    path: NavbarSegmentPath;
};

export type useActiveSegmentProps = {
    segments: NavbarSegmentData[] | undefined;
    enabled?: boolean;
};
