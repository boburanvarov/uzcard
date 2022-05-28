export interface ClientFounders {
    id?: string;
    type_founder?: string;
    capital_founder?: string;

    data_registration_founder?: string;
    name_founder?: string;

    tin_founder?: string;
    citizen_founder?: string;

    jurdical_from_founder?: string;
    address_founder?: string;

    doc_type_accountant?: string;
    doc_series_founder?: string;
    doc_number_founder?: string;
    doc_date_issue_founder?: string;
    doc_issuer_founder?: string;
    doc_date_expire_accountant?: string;

}
export interface ClientInfo {

    confirm_message?: string,
    confirm_code?: string,

    client_tin?: string,
    client_subject_type?: string,
    client_citizenship_code?: string,
    client_residency_code?: string,
    client_resident_code?: string,
    client_pinfl?: string,
    client_gender?: string,
    client_country_code?: string,
    client_birth_place?: string,
    client_birth_date?: string,
    client_birth_country?: string,


    client_firstname?: string,
    client_lastname?: string,
    client_middlename?: string


    client_name?: string,
    client_name_short?: string,

    client_addr_address_region?: string,
    client_addr_address_subregion?: string,
    client_addr_address_soato?: string,
    client_addr_address_code?: string,
    client_addr_address_zip_code?: string,
    client_addr_zip_code?: string,
    client_addr_address?: string,
    client_addr_temporary_address?: string,
    client_addr_phone?: string,
    client_addr_fax?: string,
    client_addr_email?: string,
    client_addr_mobile_phone?: string,

    client_reg_tax_organization_code?: string,
    client_reg_issuer_region?: string,
    client_reg_issuer_subregion?: string,
    client_reg_registration_date?: string,
    client_reg_registration_expire_date?: string,
    client_reg_registration_issuer?: string,
    client_reg_registration_doc_number?: string,
    client_reg_registration_document?: string,

    client_static_property_form?: string,
    client_static_legal_form?: string,
    client_static_oked?: string,
    client_static_juridical_form?: string,
    client_static_business_sign?: string,
    client_static_header_tin?: string,
    client_static_activity_type?: string,
    client_static_activity_region?: string,
    client_static_activity_subregion?: string,
    client_static_activity_address?: string,

    client_pass_name_director?: string,
    client_pass_doc_type_director?: string,
    client_pass_doc_series_director?: string,
    client_pass_doc_number_director?: string,
    client_pass_doc_date_issue_director?: string,
    client_pass_doc_issuer_director?: string,
    client_pass_doc_date_expire_director?: string,
    client_pass_citizen_director?: string,
    client_pass_birth_date_director?: string,
    client_pass_birth_country_director?: string,
    client_pass_birth_place_director?: string,
    client_pass_address_director?: string,

    client_acc_name_accountant?: string
    client_acc_doc_type_accountant?: string,
    client_acc_doc_series_accountant?: string,
    client_acc_doc_number_accountant?: string,
    client_acc_doc_date_issue_accountant?: string,
    client_acc_doc_issuer_accountant?: string,
    client_acc_doc_date_expire_accountant?: string,
    client_acc_citizen_accountant?: string,
    client_acc_birth_date_accountant?: string,
    client_acc_birth_country_accountant?: string,
    client_acc_birth_place_accountant?: string,
    client_acc_address_accountant?: string,

    client_capital_info?: string,

    founders: ClientFounders[]

}

