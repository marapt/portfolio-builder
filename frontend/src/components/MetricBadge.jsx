import React from 'react';
import { Gauge, Layers, ShieldCheck } from 'lucide-react';
import AcronymText from './AcronymText';

const KIND_STYLES = {
  scale: {
    label: 'Scale / Scope',
    accentText: 'text-cyan-300',
    accentBorder: 'border-cyan-400/30',
    focusBadge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
    icon: Layers,
  },
  velocity: {
    label: 'Velocity / Impact',
    accentText: 'text-violet-300',
    accentBorder: 'border-violet-400/30',
    focusBadge: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    icon: Gauge,
  },
  quality: {
    label: 'Quality / Governance',
    accentText: 'text-emerald-300',
    accentBorder: 'border-emerald-400/30',
    focusBadge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    icon: ShieldCheck,
  },
};

/**
 * Reusable metric badge enforcing the Rule of 3 (Scale, Velocity, Quality).
 * Displays a dashed frame + DRAFT tag whenever placeholder === true.
 */
const MetricBadge = ({ metric, compact = false }) => {
  const style = KIND_STYLES[metric.kind] || KIND_STYLES.scale;
  const Icon = style.icon;

  return (
    <div
      className={`relative rounded-2xl transition-colors ${
        compact ? 'p-3.5' : 'p-4 sm:p-5'
      } ${
        metric.placeholder
          ? 'border border-dashed border-cyan-400/40 bg-white/[0.04]'
          : `border ${style.accentBorder} bg-white/[0.04]`
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
          <Icon size={14} className={style.accentText} aria-hidden="true" />
          {style.label}
        </span>

        {metric.placeholder ? (
          <span
            className="inline-flex items-center rounded-md border border-cyan-400/40 bg-cyan-400/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200"
            title={metric.hint || 'Draft placeholder — awaiting CV/evidence verification'}
          >
            Draft
          </span>
        ) : (
          metric.focus && (
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.focusBadge}`}
            >
              {metric.focus}
            </span>
          )
        )}
      </div>

      <p className={`font-extrabold tracking-tight text-white ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
        <AcronymText text={metric.value} />
      </p>
      <p className="mt-1 text-sm text-slate-200 leading-snug">
        <AcronymText text={metric.label} />
      </p>

      {metric.placeholder && metric.hint && !compact && (
        <p className="mt-2 text-xs text-slate-400 italic">{metric.hint}</p>
      )}
    </div>
  );
};

export default MetricBadge;
