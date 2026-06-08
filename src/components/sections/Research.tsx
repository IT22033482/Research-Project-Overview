import React from 'react';
import { SectionHeader, Card } from '../ui/Shared';
import {
  BookOpen,
  Target,
  Activity,
  Lightbulb,
  AlertCircle } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend } from
'recharts';

const overallPerformanceData = [
{
  name: 'Pre-Quiz',
  score: 58.02
},
{
  name: 'Post-Learning',
  score: 62.98
}];

const participantDemographicsData = [
{
  name: 'Kids (Under 13)',
  value: 5,
  percentage: 18.5
},
{
  name: 'Teens (13–18)',
  value: 9,
  percentage: 33.3
},
{
  name: 'Adults (18+)',
  value: 13,
  percentage: 48.1
}];

const ageGroupPerformanceData = [
{
  name: 'Kids (<13)',
  preQuiz: 43.33,
  postLearning: 51.33
},
{
  name: 'Teens (13–18)',
  preQuiz: 57.41,
  postLearning: 64.15
},
{
  name: 'Adults (18+)',
  preQuiz: 64.1,
  postLearning: 66.64
}];

const learningOutcomeData = [
{
  name: 'Improved',
  value: 16,
  percentage: 59.3
},
{
  name: 'No Change',
  value: 2,
  percentage: 7.4
},
{
  name: 'Declined',
  value: 9,
  percentage: 33.3
}];

const AGE_COLORS = ['#FF8D00', '#4FB88A', '#9B7FD4'];
const OUTCOME_COLORS = ['#4FB88A', '#E8B84A', '#E87A9A'];

const chartText = '#3A3A4A';

const percentTooltipStyle = {
  borderRadius: '12px',
  border: '1px solid #FFD5B5',
  boxShadow: '0 4px 20px rgba(58, 58, 74, 0.12)',
  color: chartText,
  backgroundColor: '#FFFFFF'
};

const axisTickStyle = {
  fill: chartText,
  fontSize: 12,
  fontWeight: 600
};

const legendStyle = {
  fontSize: '12px',
  fontWeight: 600,
  color: chartText,
  paddingTop: '10px'
};

const formatPercent = (value: number) => `${value.toFixed(2)}%`;

const PieTooltip = ({
  active,
  payload
}: {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      percentage: number;
    };
  }>;
}) => {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div style={percentTooltipStyle} className="px-3 py-2 text-sm">
      <p className="font-bold text-charcoal">{item.name}</p>
      <p className="text-charcoal font-medium">
        {item.value} participants ({item.payload.percentage}%)
      </p>
    </div>);

};

export const Research = () => {
  return (
    <section id="research" className="section-pad bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="Research-Informed and Evidence-Based" />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <Card delay={0.1} className="bg-cream border-none">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-mint-light rounded-xl flex items-center justify-center text-mint-mid mr-4">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal">
                Research Background
              </h3>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              AR museum systems improve visual engagement, but many existing
              solutions lack complete geological storytelling, child-friendly
              creative interaction, AI-supported guidance, and measurable
              learning assessment.
            </p>
          </Card>

          <Card delay={0.2} className="bg-cream border-none">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-sky-light rounded-xl flex items-center justify-center text-sky-mid mr-4">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal">
                Methodology
              </h3>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              This component follows a mixed-method development and evaluation
              approach, combining prototype development, technical testing,
              learning assessment, usability feedback, and visitor interaction
              observations.
            </p>
          </Card>

          <Card delay={0.3} className="bg-cream border-none">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-lavender-light rounded-xl flex items-center justify-center text-lavender-mid mr-4">
                <Activity size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal">
                Evaluation Approach
              </h3>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Learning impact was evaluated using pre- and post-experience
              quizzes, era-based knowledge checks, usability feedback, and
              observation of visitor interaction across 27 participant profiles.
            </p>
          </Card>

          <Card delay={0.4} className="bg-cream border-none">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-peach-light rounded-xl flex items-center justify-center text-peach-mid mr-4">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal">
                Key Findings
              </h3>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              Average scores rose from 58.02% (pre-quiz) to 62.98%
              (post-learning), a gain of 4.95 percentage points. Children and
              teenagers showed the strongest improvement (+8.00 and +6.74 pp),
              and 59.3% of participants (16 of 27) improved after using the
              AR experience.
            </p>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto bg-cream rounded-[2.5rem] p-8 md:p-12 shadow-inner mb-12 border border-white">
          <h3 className="text-2xl font-heading font-bold text-center mb-3 text-charcoal">
            Evaluation Metrics
          </h3>
          <p className="text-center text-sm md:text-base text-charcoal/85 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Prototype evaluation results from 27 participants (5 kids, 9 teens,
            13 adults), based on pre-quiz and weighted post-learning era quiz
            performance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-80 bg-white p-6 rounded-3xl shadow-sm border border-peach-light/40">
              <h4 className="text-sm font-bold text-center text-charcoal mb-2 uppercase tracking-wide">
                Overall Pre-Quiz vs Post-Learning
              </h4>
              <p className="text-xs text-center text-charcoal/80 mb-4 font-semibold">
                Average improvement: +4.95 percentage points
              </p>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart
                  data={overallPerformanceData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5
                  }}>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E5EA" />
                  
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={axisTickStyle} />
                  
                  <YAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={axisTickStyle}
                    tickFormatter={(v) => `${v}%`} />
                  
                  <Tooltip
                    cursor={{ fill: '#FFF9F2' }}
                    formatter={(value: number) => [formatPercent(value), 'Score']}
                    contentStyle={percentTooltipStyle}
                    labelStyle={{ color: chartText, fontWeight: 700 }}
                    itemStyle={{ color: chartText, fontWeight: 600 }} />
                  
                  <Bar
                    dataKey="score"
                    fill="#FF8D00"
                    radius={[8, 8, 0, 0]}
                    barSize={48} />
                  
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80 bg-white p-6 rounded-3xl shadow-sm border border-peach-light/40">
              <h4 className="text-sm font-bold text-center text-charcoal mb-2 uppercase tracking-wide">
                Participant Demographics by Age Group
              </h4>
              <p className="text-xs text-center text-charcoal/80 mb-4 font-semibold">
                Gender split: 14 female, 13 male
              </p>
              <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                  <Pie
                    data={participantDemographicsData}
                    cx="50%"
                    cy="45%"
                    innerRadius={52}
                    outerRadius={72}
                    paddingAngle={4}
                    dataKey="value">
                    
                    {participantDemographicsData.map((_, index) =>
                    <Cell
                      key={`demo-${index}`}
                      fill={AGE_COLORS[index % AGE_COLORS.length]} />

                    )}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    wrapperStyle={legendStyle} />
                  
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80 bg-white p-6 rounded-3xl shadow-sm border border-peach-light/40">
              <h4 className="text-sm font-bold text-center text-charcoal mb-2 uppercase tracking-wide">
                Average Scores by Age Group
              </h4>
              <p className="text-xs text-center text-charcoal/80 mb-4 font-semibold">
                Kids showed the largest gain (+8.00 pp)
              </p>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart
                  data={ageGroupPerformanceData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5
                  }}>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E5EA" />
                  
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ ...axisTickStyle, fontSize: 11 }} />
                  
                  <YAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={axisTickStyle}
                    tickFormatter={(v) => `${v}%`} />
                  
                  <Tooltip
                    cursor={{ fill: '#FFF9F2' }}
                    formatter={(value: number) => formatPercent(value)}
                    contentStyle={percentTooltipStyle}
                    labelStyle={{ color: chartText, fontWeight: 700 }}
                    itemStyle={{ color: chartText, fontWeight: 600 }} />
                  
                  <Legend iconType="circle" wrapperStyle={legendStyle} />
                  
                  <Bar
                    dataKey="preQuiz"
                    name="Pre-Quiz"
                    fill="#9B7FD4"
                    radius={[6, 6, 0, 0]}
                    barSize={22} />
                  
                  <Bar
                    dataKey="postLearning"
                    name="Post-Learning"
                    fill="#4FB88A"
                    radius={[6, 6, 0, 0]}
                    barSize={22} />
                  
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80 bg-white p-6 rounded-3xl shadow-sm border border-peach-light/40">
              <h4 className="text-sm font-bold text-center text-charcoal mb-2 uppercase tracking-wide">
                Distribution of Learning Outcomes
              </h4>
              <p className="text-xs text-center text-charcoal/80 mb-4 font-semibold">
                16 of 27 participants improved after the AR experience
              </p>
              <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                  <Pie
                    data={learningOutcomeData}
                    cx="50%"
                    cy="45%"
                    innerRadius={52}
                    outerRadius={72}
                    paddingAngle={4}
                    dataKey="value">
                    
                    {learningOutcomeData.map((_, index) =>
                    <Cell
                      key={`outcome-${index}`}
                      fill={OUTCOME_COLORS[index % OUTCOME_COLORS.length]} />

                    )}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    wrapperStyle={legendStyle} />
                  
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-butter-light/50 border border-butter-mid/30 rounded-2xl p-6 flex items-start shadow-sm">
            <AlertCircle
              className="text-butter-mid mr-4 shrink-0 mt-0.5"
              size={24} />
            
            <p className="text-charcoal/80 text-sm leading-relaxed font-medium">
              <strong>Limitations:</strong> This evaluation involved 27 real
              museum users. Because the participant group was small, the
              findings should be treated as preliminary design-direction
              evidence and confirmed with a larger, more diverse sample of
              museum visitors. Post-learning scores combine era quizzes at
              varying difficulty levels, so results are not final proof of
              educational effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>);

};
