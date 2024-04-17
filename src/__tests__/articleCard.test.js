import { render } from '@testing-library/react';
import ArticleCard from 'components/articleCard';
import { mockData } from 'constants/constants';
test('Article Card renders successfully', () => {
  render(<ArticleCard article={mockData} />);
});
