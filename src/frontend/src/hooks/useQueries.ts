import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Announcement, AnnouncementCategory } from "../backend.d";
import { useActor } from "./useActor";

export function useAllAnnouncements() {
  const { actor, isFetching } = useActor();
  return useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAnnouncements();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAnnouncementsByCategory(category: AnnouncementCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<Announcement[]>({
    queryKey: ["announcements", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAnnouncementsByCategory(category);
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async ({
      actor,
      name,
      email,
      phone,
      subject,
      message,
    }: {
      actor: {
        submitContactForm: (
          name: string,
          email: string,
          phone: string,
          subject: string,
          message: string,
        ) => Promise<void>;
      };
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    }) => {
      await actor.submitContactForm(name, email, phone, subject, message);
    },
  });
}

export function useSubmitAdmissionForm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      actor,
      studentName,
      gradeApplyingFor,
      parentName,
      parentEmail,
      parentPhone,
      message,
    }: {
      actor: {
        submitAdmissionForm: (
          studentName: string,
          gradeApplyingFor: string,
          parentName: string,
          parentEmail: string,
          parentPhone: string,
          message: string,
        ) => Promise<void>;
      };
      studentName: string;
      gradeApplyingFor: string;
      parentName: string;
      parentEmail: string;
      parentPhone: string;
      message: string;
    }) => {
      await actor.submitAdmissionForm(
        studentName,
        gradeApplyingFor,
        parentName,
        parentEmail,
        parentPhone,
        message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admissions"] });
    },
  });
}
