import List "mo:core/List";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type AnnouncementId = Nat;
  type ContactId = Nat;
  type AdmissionId = Nat;

  type AnnouncementCategory = {
    #general;
    #academic;
    #event;
    #urgent;
  };

  type Announcement = {
    id : AnnouncementId;
    title : Text;
    content : Text;
    date : Int;
    category : AnnouncementCategory;
  };

  module Announcement {
    public func compare(announcement1 : Announcement, announcement2 : Announcement) : Order.Order {
      Int.compare(announcement1.date, announcement2.date);
    };
  };

  type ContactForm = {
    id : ContactId;
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    date : Int;
  };

  type AdmissionForm = {
    id : AdmissionId;
    studentName : Text;
    gradeApplyingFor : Text;
    parentName : Text;
    parentEmail : Text;
    parentPhone : Text;
    message : Text;
    date : Int;
  };

  var nextAnnouncementId : AnnouncementId = 0;
  var nextContactId : ContactId = 0;
  var nextAdmissionId : AdmissionId = 0;

  let announcements = Map.empty<AnnouncementId, Announcement>();
  let contactForms = Map.empty<ContactId, ContactForm>();
  let admissionForms = Map.empty<AdmissionId, AdmissionForm>();

  public shared ({ caller }) func addAnnouncement(title : Text, content : Text, category : AnnouncementCategory) : async () {
    let id = nextAnnouncementId;
    let announcement : Announcement = {
      id;
      title;
      content;
      date = 0;
      category;
    };
    announcements.add(id, announcement);
    nextAnnouncementId += 1;
  };

  public query ({ caller }) func getAllAnnouncements() : async [Announcement] {
    announcements.values().toArray().sort().reverse();
  };

  public query ({ caller }) func getAnnouncementsByCategory(category : AnnouncementCategory) : async [Announcement] {
    announcements.values().toArray().filter(
      func(a) {
        a.category == category;
      }
    );
  };

  public shared ({ caller }) func deleteAnnouncement(id : AnnouncementId) : async () {
    if (not announcements.containsKey(id)) {
      Runtime.trap("Announcement does not exist");
    };
    announcements.remove(id);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    let id = nextContactId;
    let contactForm : ContactForm = {
      id;
      name;
      email;
      phone;
      subject;
      message;
      date = 0;
    };
    contactForms.add(id, contactForm);
    nextContactId += 1;
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort(
      func(a, b) {
        Int.compare(b.date, a.date);
      }
    );
  };

  public shared ({ caller }) func submitAdmissionForm(studentName : Text, gradeApplyingFor : Text, parentName : Text, parentEmail : Text, parentPhone : Text, message : Text) : async () {
    let id = nextAdmissionId;
    let admissionForm : AdmissionForm = {
      id;
      studentName;
      gradeApplyingFor;
      parentName;
      parentEmail;
      parentPhone;
      message;
      date = 0;
    };
    admissionForms.add(id, admissionForm);
    nextAdmissionId += 1;
  };

  public query ({ caller }) func getAllAdmissionForms() : async [AdmissionForm] {
    admissionForms.values().toArray().sort(
      func(a, b) {
        Int.compare(b.date, a.date);
      }
    );
  };

  public shared ({ caller }) func initialize() : async () {
    if (nextAnnouncementId == 0) {
      await addAnnouncement(
        "Welcome Back to School!",
        "We are excited to start a new academic year. Stay tuned for updates and announcements.",
        #general,
      );
      await addAnnouncement(
        "Parent-Teacher Conference",
        "The annual Parent-Teacher Conference will be held next month. More details coming soon.",
        #event,
      );
      await addAnnouncement(
        "School Safety Measures",
        "Please review the updated safety protocols for our community's well-being.",
        #urgent,
      );
    };
  };
};
