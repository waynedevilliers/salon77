import ActionLink from '@/components/ActionLink';
import { homeIntro } from '@/content/home';

/** Supporting line and the main call to action under the home page title. */
export default function HomeIntro() {
  return (
    <div className="flex flex-col items-center gap-6 pb-8 text-center sm:pb-12">
      <p
        className="text-[length:var(--size-body)] leading-[var(--line-body)] sm:text-lg"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {homeIntro.supportingLine}
      </p>
      <ActionLink
        href={homeIntro.cta.href}
        className="min-h-12 w-full px-6 py-3 sm:w-auto"
      >
        {homeIntro.cta.label}
      </ActionLink>
    </div>
  );
}
