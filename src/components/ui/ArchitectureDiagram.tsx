import { useState } from 'react';

interface Node {
    id: string;
    label: string;
    x: number;
    y: number;
    color: string;
}

interface Edge {
    from: string;
    to: string;
}

const automationNodes: Node[] = [
    { id: 'email', label: 'Email Trigger', x: 40, y: 60, color: '#3B82F6' },
    { id: 'classify', label: 'Intent Classifier', x: 160, y: 60, color: '#6366F1' },
    { id: 'rag', label: 'RAG Context', x: 280, y: 40, color: '#3B82F6' },
    { id: 'llm', label: 'LLM Generate', x: 400, y: 60, color: '#3B82F6' },
    { id: 'send', label: 'Send Reply', x: 520, y: 60, color: '#22C55E' },
    { id: 'error', label: 'Error Log', x: 280, y: 100, color: '#EF4444' },
];

const automationEdges: Edge[] = [
    { from: 'email', to: 'classify' },
    { from: 'classify', to: 'rag' },
    { from: 'rag', to: 'llm' },
    { from: 'llm', to: 'send' },
    { from: 'classify', to: 'error' },
];

const cnnNodes: Node[] = [
    { id: 'app', label: 'Mobile App', x: 40, y: 65, color: '#3B82F6' },
    { id: 'supabase', label: 'Supabase', x: 185, y: 65, color: '#22C55E' },
    { id: 'auth', label: 'Auth', x: 310, y: 35, color: '#6366F1' },
    { id: 'storage', label: 'Storage', x: 310, y: 95, color: '#6366F1' },
    { id: 'ai', label: 'AI Services', x: 440, y: 35, color: '#3B82F6' },
    { id: 'market', label: 'Market Data', x: 440, y: 95, color: '#F59E0B' },
];

const cnnEdges: Edge[] = [
    { from: 'app', to: 'supabase' },
    { from: 'supabase', to: 'auth' },
    { from: 'supabase', to: 'storage' },
    { from: 'auth', to: 'ai' },
    { from: 'storage', to: 'market' },
];

interface TooltipState {
    visible: boolean;
    x: number;
    y: number;
    label: string;
}

const ArchitectureDiagram = ({ type }: { type: 'cnn' | 'automation' }) => {
    const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, label: '' });
    const diagramNodes = type === 'cnn' ? cnnNodes : automationNodes;
    const diagramEdges = type === 'cnn' ? cnnEdges : automationEdges;

    const getNodePos = (id: string) => {
        const node = diagramNodes.find(n => n.id === id);
        return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
    };

    return (
        <div className="relative w-full aspect-[16/7] min-h-[160px]">
            <svg viewBox="0 0 580 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Glow filter */}
                    <filter id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Animated dash for edges */}
                    <style>{`
                        .edge-line { animation: dash-flow 1.5s linear infinite; }
                        @keyframes dash-flow { to { stroke-dashoffset: -20; } }
                    `}</style>
                </defs>

                {/* Edges with glow */}
                {diagramEdges.map((edge, i) => {
                    const from = getNodePos(edge.from);
                    const to = getNodePos(edge.to);
                    const isError = edge.to === 'error';

                    return (
                        <g key={`${edge.from}-${edge.to}`}>
                            {/* Glow line */}
                            <line
                                x1={from.x + 50} y1={from.y}
                                x2={to.x} y2={to.y}
                                stroke={isError ? '#EF4444' : '#3B82F6'}
                                strokeWidth="3"
                                opacity="0.08"
                                filter={`url(#glow-${type})`}
                            />
                            {/* Visible line */}
                            <line
                                x1={from.x + 50} y1={from.y}
                                x2={to.x} y2={to.y}
                                stroke={isError ? '#EF4444' : '#3B82F6'}
                                strokeWidth="1"
                                opacity="0.3"
                                strokeDasharray="4 4"
                                className="edge-line"
                            />
                            {/* Moving dot */}
                            <circle r="2.5" fill={isError ? '#EF4444' : '#60A5FA'} opacity="0.8">
                                <animateMotion
                                    dur={`${1.5 + i * 0.3}s`}
                                    repeatCount="indefinite"
                                    path={`M${from.x + 50},${from.y} L${to.x},${to.y}`}
                                />
                            </circle>
                        </g>
                    );
                })}

                {/* Nodes */}
                {diagramNodes.map((node) => (
                    <g
                        key={node.id}
                        className="cursor-pointer"
                        onMouseEnter={() => {
                            setTooltip({ visible: true, x: node.x + 25, y: node.y - 20, label: node.label });
                        }}
                        onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
                    >
                        {/* Node glow */}
                        <rect
                            x={node.x - 4} y={node.y - 16}
                            width="58" height="32" rx="8"
                            fill={node.color}
                            opacity="0.06"
                            filter={`url(#glow-${type})`}
                        />
                        {/* Node body */}
                        <rect
                            x={node.x} y={node.y - 12}
                            width="50" height="24" rx="6"
                            fill="#111827"
                            stroke={node.color}
                            strokeWidth="0.8"
                            opacity="0.9"
                        />
                        {/* Node label */}
                        <text
                            x={node.x + 25} y={node.y + 4}
                            textAnchor="middle"
                            fill="#94A3B8"
                            fontSize="6"
                            fontFamily="monospace"
                        >
                            {node.label.length > 10 ? node.label.slice(0, 9) + '…' : node.label}
                        </text>
                    </g>
                ))}

                {/* Tooltip */}
                {tooltip.visible && (
                    <g>
                        <rect
                            x={tooltip.x - 30} y={tooltip.y - 14}
                            width="60" height="18" rx="4"
                            fill="#1a2235"
                            stroke="#3B82F6"
                            strokeWidth="0.5"
                            opacity="0.95"
                        />
                        <text
                            x={tooltip.x} y={tooltip.y - 2}
                            textAnchor="middle"
                            fill="#F1F5F9"
                            fontSize="6"
                            fontFamily="monospace"
                        >
                            {tooltip.label}
                        </text>
                    </g>
                )}
            </svg>
        </div>
    );
};

export default ArchitectureDiagram;
