"use client";
import React, { useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Advocates from "@/components/advocates";
import StudentCouncil from "@/components/student-council";
import Founders from "@/components/founders";
import SectionHeader from "../components/section-header";
import { useStateContext } from "@/lib/state";

export default function TabbedSection() {
  const { state, setState } = useStateContext();

  const handleChangeNavLink = (link: string) => {
    setState((state: any) => ({ ...state, link }));
  };
  return (
    <Tabs.Root
      value={state.link.replace("#", "")}
      className="px-4 py-6 md:px-24 md:pt-24 flex h-auto flex-col justify-around gap-6"
    >
      <Tabs.List
        aria-label="Manage your account"
        className="gap-4 items-start flex flex-col sm:flex-row"
      >
        <Tabs.Trigger
          value="advocates"
          onClick={() => handleChangeNavLink("#advocates")}
          className="border-b data-[state=active]:border-b-[#00cbfe]"
        >
          <SectionHeader id="advocates" title="Advocates" />
        </Tabs.Trigger>
        <Tabs.Trigger
          value="student-council"
          onClick={() => handleChangeNavLink("#student-council")}
          className="border-b data-[state=active]:border-b-[#00cbfe]"
        >
          <SectionHeader id="student-council" title="Student Council" />
        </Tabs.Trigger>
        <Tabs.Trigger
          value="founders"
          onClick={() => handleChangeNavLink("#founders")}
          className="border-b data-[state=active]:border-b-[#00cbfe]"
        >
          <SectionHeader id="founders" title="Founders" />
        </Tabs.Trigger>
      </Tabs.List>
      <div className="flex flex-wrap items-center lg:justify-between gap-4">
        <Tabs.Content value="advocates">
          <Advocates />
        </Tabs.Content>
        <Tabs.Content value="student-council">
          <StudentCouncil />
        </Tabs.Content>
        <Tabs.Content value="founders">
          <Founders />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
