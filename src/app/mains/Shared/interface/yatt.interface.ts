export interface Yurik {
    created_at: string;
    address_region: string;
    address_subregion: string;
    address_code: string;
    address: string;
    name_director: string;
    doc_type_director: string;
    doc_date_issue_director: string;
    doc_issuer_director: string;
    doc_date_expire_director: string;
    citizen_director: string;
    birth_date_director: string;
    birth_country_director: string;
    citizenship_code: string;
    phone: string;
    name_accountant: string;
    doc_type_accountant: string;
    doc_date_issue_accountant: string;
    doc_issuer_accountant: string;
    doc_date_expire_accountant: string;
    citizen_accountant: string;
    birth_date_accountant: string;
    birth_place_accountant: string;
    birth_country_accountant: string;
    address_accountant: string;
    capital_info: string;
    capital_info_paid: string;
    confirm_code: string;
    confirm_message: string;
    doc_date_expire_founder: string;
    dos_date_issue_director: string;
    founders: Founders[];
}

export interface Founders {
    name_founder: string;
    capital_founder: string;
    address_founder: string;
    doc_type_accountant: string;
    doc_series_founder: string;
    doc_number_founder: string;
    doc_date_issue_founder: string;
    doc_issuer_founder: string;
    doc_date_expire_accountant: string;
    citizen_founder: string;
}
