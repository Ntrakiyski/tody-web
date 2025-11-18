import { sectionRegistry } from '@/lib/section-registry';
import homeData from '@/data/home.json';

export default function HomePage() {
  return (
    <main>
      {Object.entries(homeData).map(([sectionName, sectionConfig]) => {
        if (!sectionConfig.enabled) return null;

        const SectionComponent = sectionRegistry[sectionName];

        if (!SectionComponent) {
          console.warn(`Section "${sectionName}" not found in registry`);
          return null;
        }

        return (
          <SectionComponent
            key={sectionName}
            data={sectionConfig.data}
          />
        );
      })}
    </main>
  );
}
