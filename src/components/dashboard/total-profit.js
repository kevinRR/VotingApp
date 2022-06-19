import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AdUnitsIcon from '@mui/icons-material/AdUnits';

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            CAMPAIGN
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            5
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AdUnitsIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
