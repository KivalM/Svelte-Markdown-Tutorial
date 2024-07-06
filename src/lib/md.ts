export type Md = {
    // this is the metadata for the file
    metadata: Metadata;
    // this is the default export of the file (the content of the file)
    default: unknown;
};


export interface Metadata {
    title: string;
};


function loadMDFiles() {
    let records = import.meta.glob<Md>('/src/lib/md/**/*.md', { eager: true });
    // convert to array
    let entries = Object.entries(records).map(([path, record]) => {
        // lets use the filename and directory as the slug
        let slug = path.replace('/src/lib/md/', '').replace('.md', '');

        return {
            slug,
            ...record.metadata,
            content: record.default
        };
    });

    return entries;
}

export const md = loadMDFiles();