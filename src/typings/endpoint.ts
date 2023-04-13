
export interface EndpointsProps {
    meta:   Meta;
    report: { [key: string]: Array<Array<ReportClass | string>> };
}

export interface Meta {
    details: Details;
    network: Network;
    title:   Details;
    update:  Network;
}

export interface Details {
    value: string;
}

export interface Network {
    label: string;
    value: string;
}

export interface ReportClass {
    html_name: string;
    name:      string;
    rank:      number;
}
