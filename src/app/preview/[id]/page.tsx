import { Suspense } from "react";
import { getLandingPage } from "@/lib/api";
import LoadingSpinner from "./LoadingSpinner";
import PreviewContent from "./PreviewContent";

async function getData(id: string) {
  try {
    const data = await getLandingPage(id);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch landing page data");
  }
}

export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PreviewContent data={data} />
    </Suspense>
  );
}
