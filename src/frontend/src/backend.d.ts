import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    id: ContactId;
    subject: string;
    date: bigint;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export type AdmissionId = bigint;
export interface AdmissionForm {
    id: AdmissionId;
    parentEmail: string;
    studentName: string;
    date: bigint;
    parentPhone: string;
    message: string;
    parentName: string;
    gradeApplyingFor: string;
}
export interface Announcement {
    id: AnnouncementId;
    title: string;
    content: string;
    date: bigint;
    category: AnnouncementCategory;
}
export type AnnouncementId = bigint;
export type ContactId = bigint;
export enum AnnouncementCategory {
    academic = "academic",
    event = "event",
    urgent = "urgent",
    general = "general"
}
export interface backendInterface {
    addAnnouncement(title: string, content: string, category: AnnouncementCategory): Promise<void>;
    deleteAnnouncement(id: AnnouncementId): Promise<void>;
    getAllAdmissionForms(): Promise<Array<AdmissionForm>>;
    getAllAnnouncements(): Promise<Array<Announcement>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAnnouncementsByCategory(category: AnnouncementCategory): Promise<Array<Announcement>>;
    initialize(): Promise<void>;
    submitAdmissionForm(studentName: string, gradeApplyingFor: string, parentName: string, parentEmail: string, parentPhone: string, message: string): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, subject: string, message: string): Promise<void>;
}
