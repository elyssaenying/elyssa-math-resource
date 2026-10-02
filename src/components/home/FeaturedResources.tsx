import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import ResourceCard from "@/components/resources/ResourceCard";
import { getRecentResources } from "@/lib/resources";

export default function FeaturedResources() {
  const resources = getRecentResources(3);

  return (
    <section className="bg-butter/15 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Latest"
            title="Recently added resources."
          />
          <Button href="/resources" variant="ghost" showArrow>
            View all resources
          </Button>
        </div>

        <div className="mt-10">
          {resources.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No resources here yet."
              description="Materials will be added soon — check back later or browse the full library."
              action={<Button href="/resources">Browse Resource Library</Button>}
            />
          )}
        </div>
      </div>
    </section>
  );
}
